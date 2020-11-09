import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../styles/Container.module.css';
import { useHistory, useParams } from 'react-router';
import NoteForm from '../componets/NoteForm';

import { addNote } from '../redux/Note/note.actions';
import { Note } from '../types/note/note';
import { defaultState } from '../types/default-state';

const AddNoteScreen = () => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();

  const notes = useSelector((state: defaultState) => state.notes);

  const note = useMemo(() => notes.find((note: Note) => note.id === id), [id, notes]);

  const onSubmit = (note?: Note) => {
    if (note !== undefined) {
      dispatch(addNote(note));
      console.log(history);
      history.push('/');
    }
  };

  return (
    <div className={Container.center}>
      <NoteForm
        actionName={'Add note'}
        formTitle={'Add new note'}
        onSubmitForm={(note) => onSubmit(note)}
        note={note}
      />
    </div>
  );
};

export default AddNoteScreen;
