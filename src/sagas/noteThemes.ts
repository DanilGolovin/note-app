import { put, call, takeLatest, all, take } from 'redux-saga/effects';

import { getNoteThemes, startDeleteNoteTheme, startSaveNoteTheme, startUpdateNoteTheme } from "../redux/NoteTheme/note.theme.actions";
import store from "../redux/store";

import { databaseRef } from '../firebase/firebase'; 
import { START_DELETE_NOTE_THEME, START_SAVE_NOTE_THEME, START_UPDATE_NOTE_THEME } from '../redux/NoteTheme/note.theme.types';
import { eventChannel } from 'redux-saga';
import { authSuccess } from '../redux/Auth/auth.actions';
import { AUTH_SUCCESS } from '../redux/Auth/auth.types';

function createGetNoteThemesChannel(uid: string) {
    return uid && eventChannel(emit => {

        const themesRef = databaseRef.child(`users/${uid}/note-themes`)
               
        themesRef.on('value', (snapshot) => {
            const themes:any = [] 

            snapshot.forEach((childSnapshot: any) => { // вызываеться один раз для каждого child
                const id = childSnapshot.key 
                const theme = childSnapshot.val()
                themes.push({
                    ...theme,
                    id,
                })
            })
            emit(themes)
        },  () => emit(false));
        
        return () => ({})
    })
}


function* getNoteThemesSaga(action: ReturnType<typeof authSuccess>) {
    try {
        const { uid } = action.payload.user;
        
        if (!uid) return 
        
        const channel = yield call(createGetNoteThemesChannel, uid);
        
        while (true) {
            const data: any[] = yield take(channel);
            if (data) yield put(getNoteThemes(data));
        }
    } catch (error) {
        console.log('Get notes error: ', error)
    }
  }
  


// export function* addNoteThemeSaga(action: ReturnType<typeof startAddNoteTheme>) {
//     const { noteTheme, uid } = action.payload

//     try {
//         const noteThemesRef = databaseRef.child(`users/${uid}/note-themes`)
      
//         const response = yield call([noteThemesRef, "push"], 
//         {noteTheme: noteTheme}
//         );
    
//         console.log('created note theme, response from database: ', response)
    
//         yield put(addNoteTheme(noteTheme, response.key));
//     } catch (error) {
//         console.log('Add note theme error: ', error)
//     }
// }
export function* deleteNoteThemeSaga(action: ReturnType<typeof startDeleteNoteTheme>) {
    const state = store.getState()
    const uid = state.auth.user.uid

    const { id } = action.payload

    try {    
        const noteThemesRef = databaseRef.child(`users/${uid}/note-themes/${id}`)
      
        yield call([noteThemesRef, "remove"]);
    } catch (error) {
        console.log('Remove note theme error: ', error)
    }
}

// function applyThemeToAll () {

// }

export function* updateNoteThemeSaga(action: ReturnType<typeof startUpdateNoteTheme>) {
    const { withApplyingToAll } = action.payload
    const state = store.getState()
    const uid = state.auth.user.uid
    const theme = state.noteTheme.settings
    const notes = state.notes.notes

    try {
        const noteThemeRef = databaseRef.child(`users/${uid}/note-themes/${theme.id}`)
      
        yield call([noteThemeRef, "update"], theme);
        
        if (withApplyingToAll) {
            const newNotes = notes.map(note => ({...note, themeId: theme.id}))
            for (let i = 0; i < newNotes.length; i++) {
                const noteRef = databaseRef.child(`users/${uid}/notes/${newNotes[i].id}`)
                yield call([noteRef, "update"], newNotes[i])
            }
        }
    } catch (error) {
        console.log('Update note theme error: ', error)
    }
}



export function* saveThemeSaga(action: ReturnType<typeof startSaveNoteTheme>) {
    const { withApplyingToAll } = action.payload
    const state = store.getState()
    const uid = state.auth.user.uid
    const theme = state.noteTheme.settings
    const notes = state.notes.notes
    
    try {
        const noteThemesRef = databaseRef.child(`users/${uid}/note-themes`)
        
        const response = yield call([noteThemesRef, "push"], theme);

        const themeId = response.key

        if (withApplyingToAll) {
            const newNotes = notes.map(note => ({...note, themeId: themeId}))
            for (let i = 0; i < newNotes.length; i++) {
                const noteRef = databaseRef.child(`users/${uid}/notes/${newNotes[i].id}`)
                yield call([noteRef, "update"], newNotes[i])
            }
        }
        
        // console.log('Saved note theme! response: ', response)
    } catch (error) {
        // console.log('Save note theme error: ', error)
    }
}

export default function* () {
    // @ts-ignore
  yield all[
    yield takeLatest(START_SAVE_NOTE_THEME, saveThemeSaga),
    yield takeLatest(AUTH_SUCCESS, getNoteThemesSaga),
    yield takeLatest(START_DELETE_NOTE_THEME, deleteNoteThemeSaga),
    yield takeLatest(START_UPDATE_NOTE_THEME, updateNoteThemeSaga)
  ];
}

