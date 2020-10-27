import React, { useState } from 'react';
import { connect } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { addNote } from '../redux/Note/note.actions';
import Container from '../componets/Container.module.css';
import Form from '../componets/Form.module.css';
import PropTypes from 'prop-types';

function AddNoteScreen(props) {
  const [title, setTitle] = useState('');
  const [inputError, setInputError] = useState('');

  const onTitleChange = (e) => {
    const noteTitle = e.target.value;
    setTitle(noteTitle);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    if (!title) {
      setInputError('Please provide title.');
    } else {
      setInputError('');
      const data = {
        title: title,
        id: uuidv4(),
      };
      props.dispatch({
        type: 'ADD_NOTE',
        data,
      });
      setTitle('');
      props.history.push('/');
    }
  };

  return (
    <div className={Container.center}>
      <h1>Add your note</h1>
      <form className={Form.wrapper} onSubmit={onSubmit}>
        <input type="text" placeholder="title" value={title} onChange={onTitleChange} />
        <button>Add Note</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    note: state.notes.note,
  };
};

AddNoteScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(AddNoteScreen);
