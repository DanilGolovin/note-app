import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '../styles/Container.module.css';
import { useHistory, useParams } from 'react-router';
import NoteForm from '../componets/NoteForm';
import { addNote } from '../redux/Note/note.actions';

const AddNoteScreenProps = {
  dispatch: PropTypes.func,
  note: PropTypes.object,
  id: PropTypes.string,
  notes: PropTypes.array,
};

const AddNoteScreen = (props) => {
  const { notes, dispatch } = props;

  const history = useHistory();
  const params = useParams();
  const note = useMemo(() => notes.find((note) => note.id === params.id), [params.id, notes]);
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
