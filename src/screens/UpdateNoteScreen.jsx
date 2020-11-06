import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../styles/Button.module.css';
import Container from '../styles/Container.module.css';
import { useHistory, useParams } from 'react-router';
import NoteForm from '../componets/NoteForm';
import { deleteNote, updateNote } from '../redux/Note/note.actions';

const UpdateNoteScreenProps = {
  dispatch: PropTypes.func,
  note: PropTypes.object,
  id: PropTypes.string,
  notes: PropTypes.array,
};

const UpdateNoteScreen = (props) => {
  const { notes, dispatch } = props;

  const history = useHistory();
  const params = useParams();

  const note = useMemo(() => notes.find((note) => note.id === params.id), [params.id, notes]);

  return (
    <div className={Container.center}>
      <NoteForm
        actionName={'Update note'}
        formTitle={'Update note'}
        onSubmit={(note) => {
          dispatch(updateNote(note));
          history.push('/');
        }}
        note={note}
      />
      <button
        className={Button.primary_btn + ' ' + Button.delete_btn + ' ' + Button.btn__with_margin}
        onClick={() => {
          dispatch(deleteNote(note.id));
          history.push('/');
        }}
      >
        REMOVE
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

UpdateNoteScreen.propTypes = UpdateNoteScreenProps;

export default connect(mapStateToProps)(UpdateNoteScreen);
