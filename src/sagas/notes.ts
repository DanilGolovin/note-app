import { put, call, takeLatest, all, take } from 'redux-saga/effects';
import { 
    START_ADD_NOTE,
    START_DELETE_NOTE,
    START_UPDATE_NOTE, 
} from "../redux/Note/note.types";

import { databaseRef } from '../firebase/firebase'; 
import {
    startAddNote,
    startUpdateNote,
    // addNote,
    getNotes,
    startDeleteNote,
    // deleteNote,
    // updateNote
} from '../redux/Note/note.actions';
import { Note } from '../types/note/note';
import { eventChannel } from 'redux-saga';
import { authSuccess } from '../redux/Auth/auth.actions';
import { AUTH_SUCCESS } from '../redux/Auth/auth.types';

export function* addNoteSaga(action: ReturnType<typeof startAddNote>) {
    const { note, uid } = action.payload

    try {
        const notesRef = databaseRef.child(`users/${uid}/notes`)
      
        const response = yield call([notesRef, "push"], 
        {
            title: note.title,
            description: note.description,
            category: note.category,
            themeId: note.themeId,
        });
    
        console.log('created note, response from database: ', response)
    
        // yield put(addNote(note, response.key));
    } catch (error) {
        console.log('Add note error: ', error)
    }
}
export function* deleteNoteSaga(action: ReturnType<typeof startDeleteNote>) {
    const {id, uid} = action.payload

    try {
        console.log('Remove note: action.payload --- ', action.payload)
        // const notesRef = databaseRef.child(`users/${uid}/notes`)
      
        // const response = yield call([notesRef, "set"], null);

        const noteRef = databaseRef.child(`users/${uid}/notes/${id}`)
      
        yield call([noteRef, "remove"]);
        
        // yield put(deleteNote(id));
    } catch (error) {
        console.log('Remove note error: ', error)
    }
}

export function* updateNoteSaga(action: ReturnType<typeof startUpdateNote>) {
    const {note, uid} = action.payload

    try {
        console.log('note action.payload in updateNoteSaga : ', note)
        const noteRef = databaseRef.child(`users/${uid}/notes/${note.id}`)
      
        yield call([noteRef, "update"], 
        {
            title: note.title,
            description: note.description,
            category: note.category,
            themeId: note.themeId,
        });
        
        // yield put(updateNote(note));
    } catch (error) {
        console.log('Update note error: ', error)
    }
}

function createGetNotesChannel(uid: string) {
    return uid && eventChannel(emit => {

        const notesRef = databaseRef.child(`users/${uid}/notes`)
               
        notesRef.on('value', (snapshot) => {
            const notes:Note[] = [] 

            snapshot.forEach((childSnapshot: any) => { // вызываеться один раз для каждого child
                const Note = {id: childSnapshot.key, ...childSnapshot.val()}
                console.log('Note : ', Note)
                notes.push(Note)
            })
            emit(notes)
        },  () => emit(false));
        
        return () => ({})
    })
}


function* getNotesSaga(action: ReturnType<typeof authSuccess>) {
    try {
        const { uid } = action.payload.user;
        
        if (!uid) return 
        
        const channel = yield call(createGetNotesChannel, uid);
        
        while (true) {
            const data: Note[] = yield take(channel);
            if (data) yield put(getNotes(data));
        }
    } catch (error) {
        console.log('Get notes error: ', error)
    }
  }
  

export default function* () {
    // @ts-ignore
  yield all[
    (yield takeLatest(START_ADD_NOTE, addNoteSaga),
    yield takeLatest(AUTH_SUCCESS, getNotesSaga),
    yield takeLatest(START_UPDATE_NOTE, updateNoteSaga),
    yield takeLatest(START_DELETE_NOTE, deleteNoteSaga))
  ];
}
