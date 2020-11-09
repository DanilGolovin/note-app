import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../styles/Button.module.css';
import Container from '../styles/Container.module.css';
import { useHistory, useParams } from 'react-router';
import NoteForm from '../componets/NoteForm';
import { deleteNote, updateNote } from '../redux/Note/note.actions';
import { Note } from '../types/note/note';
import { defaultState } from '../types/default-state';

const UpdateNoteScreen = () => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();

  const notes = useSelector((state: defaultState) => state.notes);

  const note = useMemo(() => notes.find((note: Note) => note.id === id), [id, notes]);

  const onSubmit = (note: Note) => {
    dispatch(updateNote(note));
    history.push('/');
  };

  const onDeleteClick = () => {
    if (note) dispatch(deleteNote(note.id));
    history.push('/');
  };

  return (
    <div className={Container.center}>
      <NoteForm
        actionName={'Update note'}
        formTitle={'Update note'}
        onSubmitForm={(note) => {
          onSubmit(note);
        }}
        note={note}
      />
      <button
        className={Button.primary_btn + ' ' + Button.delete_btn + ' ' + Button.btn__with_margin}
        onClick={() => onDeleteClick()}
      >
        REMOVE
      </button>
    </div>
  );
};

export default UpdateNoteScreen;
