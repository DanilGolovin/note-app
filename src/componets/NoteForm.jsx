import React, { useState } from 'react';
import { connect } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import Container from '../componets/Container.module.css';
import Form from '../componets/Form.module.css';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';

function NoteForm(props) {
  const [title, setTitle] = useState(props.note ? props.note.title : '');
  const [description, setDescription] = useState(props.note ? props.note.description : '');
  const [inputError, setInputError] = useState('');
  const [category, setCategory] = useState('');

  const onCategoryChoose = (category) => {
    setCategory(category);
  };

  const onTitleChange = (e) => {
    const noteTitle = e.target.value;
    setTitle(noteTitle);
  };

  const onDescriptionChange = (e) => {
    const noteDescription = e.target.value;
    setDescription(noteDescription);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title === '' || description === '' || category === '') {
      setInputError('Please provide title and description.');
    } else {
      setInputError('');
      const data = {
        title: title,
        description: description,
        category: category,
        id: props.note ? props.note.id : uuidv4(),
      };
      props.dispatch(props.onSubmit(data));
      setTitle('');
      setDescription('');
      props.history.push('/');
    }
  };

  return (
    <div className={Container.center}>
      <h1>Add your note</h1>
      <p>{inputError}</p>
      <form className={Form.wrapper} onSubmit={onSubmit}>
        <input type="text" placeholder="title" value={title} onChange={onTitleChange} />
        <CategoryFilter category={category} onCategorySelect={onCategoryChoose} />
        <textarea
          value={description}
          onChange={onDescriptionChange}
          placeholder="Description..."
          cols="30"
          rows="5"
        />

        <button>Add Note</button>
      </form>
    </div>
  );
}

NoteForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatch: PropTypes.func,
  note: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default NoteForm;
