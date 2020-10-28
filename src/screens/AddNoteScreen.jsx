import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '../styles/Container.module.css';
import { useParams } from 'react-router';
import NoteForm from '../componets/NoteForm';
import { addNote } from '../redux/Note/note.actions';

const AddNoteScreenProps = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
  note: PropTypes.object,
  id: PropTypes.string,
  notes: PropTypes.array,
};

const AddNoteScreen = (props) => {
  const { notes, dispatch, history } = props;

  const params = useParams();
  const [note, setNote] = useState(notes.find((note) => note.id === params.id));

  return (
    <div className={Container.center}>
      <NoteForm
        actionName={'Add note'}
        formTitle={'Add new note'}
        onSubmit={(note) => {
          dispatch(addNote(note));
          history.push('/');
        }}
        note={note}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

AddNoteScreen.propTypes = AddNoteScreenProps;

export default connect(mapStateToProps)(AddNoteScreen);
