import { put, call, takeLatest, all } from 'redux-saga/effects';

import { databaseRef } from '../firebase/firebase'; 
import { startDeleteNote } from '../redux/Note/note.actions';
import { addNoteTheme, deleteNoteTheme, getNoteThemes, startAddNoteTheme, startGetNoteThemes, startUpdateNoteTheme, updateNoteTheme } from '../redux/NoteTheme/note.theme.actions';
import { START_ADD_NOTE_THEME, START_DELETE_NOTE_THEME, START_GET_NOTE_THEMES, START_UPDATE_NOTE_THEME } from '../redux/NoteTheme/note.theme.types';

export function* getNoteThemesSaga(action: ReturnType<typeof startGetNoteThemes>) {
    const uid = action.payload.uid

    try {
        const noteThemesRef = databaseRef.child(`users/${uid}/note-themes`)
      
        const snapshot = yield call([noteThemesRef, "once"], 'value');
        const noteThemes:any = [] 
        
        snapshot.forEach((childSnapshot: any) => { // вызываеться один раз для каждого child
            noteThemes.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log('get note themes, response from database: ', noteThemes)
    
        yield put(getNoteThemes(noteThemes));
    } catch (error) {
        console.log('Get note themes error: ', error)
    }
}

export function* addNoteThemeSaga(action: ReturnType<typeof startAddNoteTheme>) {
    const { noteTheme, uid } = action.payload

    try {
        const noteThemesRef = databaseRef.child(`users/${uid}/note-themes`)
      
        const response = yield call([noteThemesRef, "push"], 
        {noteTheme: noteTheme}
        );
    
        console.log('created note theme, response from database: ', response)
    
        yield put(addNoteTheme(noteTheme, response.key));
    } catch (error) {
        console.log('Add note theme error: ', error)
    }
}
export function* deleteNoteThemeSaga(action: ReturnType<typeof startDeleteNote>) {
    const {id, uid} = action.payload

    try {    
        const noteThemesRef = databaseRef.child(`users/${uid}/note-themes/${id}`)
      
        yield call([noteThemesRef, "remove"]);
        
        yield put(deleteNoteTheme(id));
    } catch (error) {
        console.log('Remove note theme error: ', error)
    }
}

export function* updateNoteThemeSaga(action: ReturnType<typeof startUpdateNoteTheme>) {
    const { noteTheme, uid } = action.payload

    try {
        const noteThemesRef = databaseRef.child(`users/${uid}/note-themes/${noteTheme.id}`)
      
        yield call([noteThemesRef, "update"], 
        {
            noteTheme: noteTheme
        }
        );
        
        yield put(updateNoteTheme(noteTheme));
    } catch (error) {
        console.log('Update note theme error: ', error)
    }
}
export default function* () {
    // @ts-ignore
  yield all[
    (yield takeLatest(START_GET_NOTE_THEMES, getNoteThemesSaga),
    yield takeLatest(START_ADD_NOTE_THEME, addNoteThemeSaga),
    yield takeLatest(START_DELETE_NOTE_THEME, deleteNoteThemeSaga),
    yield takeLatest(START_UPDATE_NOTE_THEME, updateNoteThemeSaga))
  ];
}
