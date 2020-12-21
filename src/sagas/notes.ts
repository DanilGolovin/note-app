import { put, call, takeLatest, all } from 'redux-saga/effects';
import { 
    START_ADD_NOTE,
    START_DELETE_NOTE,
    START_GET_NOTES, 
    START_UPDATE_NOTE, 
} from "../redux/Note/note.types";

import { databaseRef } from '../firebase/firebase'; 
import {
    startAddNote,
    startUpdateNote,
    addNote,
    startGetNotes,
    getNotes,
    startDeleteNote,
    deleteNote,
    updateNote
} from '../redux/Note/note.actions';
import { Note } from '../types/note/note';

export function* getNotesSaga(action: ReturnType<typeof startGetNotes>) {
    const uid = action.payload.uid

    try {
        const notesRef = databaseRef.child(`users/${uid}/notes`)
      
        const snapshot = yield call([notesRef, "once"], 'value');
        const notes:Note[] = [] 
        
        snapshot.forEach((childSnapshot: any) => { // вызываеться один раз для каждого child
            notes.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log('get notes, response from database: ', notes)
    
        yield put(getNotes(notes));
    } catch (error) {
        console.log('Get notes error: ', error)
    }
}

export function* addNoteSaga(action: ReturnType<typeof startAddNote>) {
    const { note, uid } = action.payload

    try {
        const notesRef = databaseRef.child(`users/${uid}/notes`)
      
        const response = yield call([notesRef, "push"], 
        {
            title: note.title,
            description: note.description,
            category: note.category
        }
        );
    
        console.log('created note, response from database: ', response)
    
        yield put(addNote(note, response.key));
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

        const notesRef = databaseRef.child(`users/${uid}/notes/${id}`)
      
        yield call([notesRef, "remove"]);
        
        yield put(deleteNote(id));
    } catch (error) {
        console.log('Remove note error: ', error)
    }
}

export function* updateNoteSaga(action: ReturnType<typeof startUpdateNote>) {
    const {note, uid} = action.payload

    try {
        console.log('note action.payload in updateNoteSaga : ', note)
        const notesRef = databaseRef.child(`users/${uid}/notes/${note.id}`)
      
        yield call([notesRef, "update"], 
        {
            title: note.title,
            description: note.description,
            category: note.category,
        }
        );
        
        yield put(updateNote(note));
    } catch (error) {
        console.log('Update note error: ', error)
    }
}
export default function* () {
    // @ts-ignore
  yield all[
    (yield takeLatest(START_ADD_NOTE, addNoteSaga),
    yield takeLatest(START_GET_NOTES, getNotesSaga),
    yield takeLatest(START_UPDATE_NOTE, updateNoteSaga),
    yield takeLatest(START_DELETE_NOTE, deleteNoteSaga))
  ];
}
