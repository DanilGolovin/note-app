import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import button from '../componets/NoteItem.module.css';
import { v4 as uuidv4 } from 'uuid';
import Form from '../componets/Form.module.css';
import { useParams } from 'react-router';
import NoteForm from '../componets/NoteForm';
import { deleteNote, updateNote } from '../redux/Note/note.actions';

const UpdateNoteScreen = (props) => {
  const params = useParams();
  const [note, setNote] = useState(props.notes.find((note) => note.id === params.id));

  return (
    <div>
      <NoteForm
        onSubmit={(note) => {
          props.dispatch(updateNote(note));
          props.history.push('/');
        }}
        note={note}
      />
      <button
        className={button.delete}
        onClick={() => {
          props.dispatch(deleteNote(note.id));
          props.history.push('/');
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

UpdateNoteScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
  note: PropTypes.object,
  id: PropTypes.string,
  notes: PropTypes.array,
};

export default connect(mapStateToProps)(UpdateNoteScreen);
