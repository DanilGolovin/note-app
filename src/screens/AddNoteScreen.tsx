import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../styles/Container.module.css';
import { useHistory, useParams } from 'react-router';


import { startAddNote } from '../redux/Note/note.actions';
import { Note } from '../types/note/note';
import { defaultState } from '../types/default-state';
import NoteForm from '../componets/NoteForm';

const AddNoteScreen = () => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();

  const notes = useSelector((state: defaultState) => state.notes.notes);

  const uid = useSelector((state: defaultState) => state.auth.user?.uid);

  const note = useMemo(() => notes.find((note: Note) => note.id === id), [id, notes]);

  const onSubmit = (note?: Note) => {
    if (note !== undefined) {
      uid && dispatch(startAddNote(note, uid));
      history.push('/');
    }
  };

  return (
    <div className={Container.column_flex + " " + Container.align_center}>
      <NoteForm
        actionName={'Add note'}
        formTitle={'Add new note'}
        onSubmitForm={(note: Note) => onSubmit(note)}
        note={note}
      />
    </div>
  );
};

export default AddNoteScreen;
