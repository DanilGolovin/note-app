import React, { useState } from 'react';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import Container from '../styles/Container.module.css';
import Form from '../styles/Form.module.css';
import CategoryFilter from './CategoryFilter';
import Input from '../styles/Input.module.css';
import Button from '../styles/Button.module.css';
import { Note } from '../types/note/note';

type Props = {
  note?: Note;
  actionName: string;
  formTitle: string;
  onSubmitForm: (data: Note) => void;
};

function NoteForm({ actionName, formTitle, note, onSubmitForm }: Props) {
  const [title, setTitle] = useState(note ? note.title : '');
  const [description, setDescription] = useState(note ? note.description : '');
  const [inputError, setInputError] = useState('');
  const [category, setCategory] = useState('');

  const onCategoryChoose = (category: string) => {
    setCategory(category);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setDescription(e.target.value);
  };

  const giveValidNote = () => {
    setInputError('');

    const data: Note = {
      title: title,
      description: description,
      category: category ? category : 'all',
      id: note ? note.id : uuidv4(),
    };

    onSubmitForm(data);
    setTitle('');
    setDescription('');
  };

  const onSubmit = (e: React.FormEvent) => {
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
          value={description}
          placeholder="description"
          onChange={onDescriptionChange}
          required={true}
        />
        <CategoryFilter onCategorySelect={onCategoryChoose} filterClass={Input.container} />
        <button className={Button.primary_btn}>{actionName}</button>
      </form>
    </div>
  );
}

export default NoteForm;
