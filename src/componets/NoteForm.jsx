import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from '../styles/Container.module.css';
import Form from '../styles/Form.module.css';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import Input from '../styles/Input.module.css';
import Button from '../styles/Button.module.css';

const NoteFormProps = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatch: PropTypes.func,
  note: PropTypes.object,
  actionName: PropTypes.string,
  formTitle: PropTypes.string,
  onSubmit: PropTypes.func,
};

function NoteForm(props) {
  const { actionName, formTitle, note } = props;
  const [title, setTitle] = useState(note ? note.title : '');
  const [description, setDescription] = useState(note ? note.description : '');
  const [inputError, setInputError] = useState('');
  const [category, setCategory] = useState('');

  const onCategoryChoose = (category) => {
    setCategory(category);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const giveValidNote = () => {
    setInputError('');
    const data = {
      title: title,
      description: description,
      category: category ? category : 'all',
      id: note ? note.id : uuidv4(),
    };
    console.log(data);
    props.onSubmit(data);
    setTitle('');
    setDescription('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === '' || description === '' || category === '') {
      setInputError('Please provide title and description.');
    } else {
      giveValidNote();
    }
  };

  return (
    <div className={Container.center}>
      <h1>{formTitle}</h1>
      <p>{inputError}</p>
      <form className={Form.wrapper} onSubmit={onSubmit}>
        <input
          className={Input.container}
          type="text"
          placeholder="title"
          value={title}
          onChange={onTitleChange}
          required={true}
        />
        <textarea
          className={Input.container}
          type="text"
          value={description}
          placeholder="description"
          onChange={onDescriptionChange}
          cols="30"
          rows="5"
          required={true}
        />
        <CategoryFilter
          category={category}
          onCategorySelect={onCategoryChoose}
          class={Input.container}
        />
        <button className={Button.primary_btn}>{actionName}</button>
      </form>
    </div>
  );
}

NoteForm.propTypes = NoteFormProps;

export default NoteForm;
