import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../styles/Button.module.css';
import Container from '../styles/Container.module.css';
import { useHistory, useParams } from 'react-router';
import NoteForm from '../componets/NoteForm';
import { startDeleteNote, startUpdateNote } from '../redux/Note/note.actions';
import { Note } from '../types/note/note';
import { defaultState } from '../types/default-state';

const UpdateNoteScreen = () => {
  const history = useHistory();
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch();

  const notes = useSelector((state: defaultState) => state.notes.notes);
  const uid = useSelector((state: defaultState) => state.auth.user?.uid);

  const note = useMemo(() => notes.find((note: Note) => note.id === id), [id, notes]);

  console.log('note in UpdateNoteScreen : ', note)

  const onSubmit = (note: Note) => {
    note && uid && dispatch(startUpdateNote(note, uid));
    history.push('/');
  };

  const onDeleteClick = () => {
    note && uid && dispatch(startDeleteNote(note.id, uid));
    history.push('/');
  };

  return (
    <div className={Container.column_flex + " " + Container.align_center}>
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
        onClick={onDeleteClick}
      >
        REMOVE
      </button>
    </div>
  );
};

export default UpdateNoteScreen;
