import React, { useState } from 'react';
import Container from '../styles/Container.module.css';
import CategoryFilter from './CategoryFilter';
import Input from '../styles/Input.module.css';
import Button from '../styles/Button.module.css';
import { Note } from '../types/note/note';
import { defaultState } from '../types/default-state';
import { useSelector } from 'react-redux';

import { defaultCategory } from './CategoryFilter'
import { Category } from '../types/category/category';
import useSettings from '../hooks/useSettings';
import ThemeList from './ThemeList';

type Props = {
  note?: Note;
  actionName: string;
  formTitle: string;
  onSubmitForm: (data: Note) => void;
};

function NoteForm({ actionName, formTitle, note, onSubmitForm }: Props) {
  const categories = useSelector((state: defaultState) => state.categories.categories);
  const [title, setTitle] = useState(note ? note.title : '');
  const [description, setDescription] = useState(note ? note.description : '');
  const [inputError, setInputError] = useState('');
  const [filterCategory, setFilterCategory] = useState(defaultCategory);

  const { settings } = useSettings()

  const onCategoryChoose = (filterCategory: Category) => {
    setFilterCategory(filterCategory);
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
      category: filterCategory,
      id: note?.id || ''
    };

    onSubmitForm(data);
    setTitle('');
    setDescription('');
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === '' || description === '') {
      setInputError('Please provide title and description.');
    } else {
      giveValidNote();
    }
  };
 
  return (
    <>
      <div
        className={Container.column_flex + " " + Container.align_center}
        style={{backgroundColor: `${settings.backgroundColor}`, flexBasis: "100%"}}
      >
        <h1>{formTitle}</h1>
        <p>{inputError}</p>
        <form>
         
          <input
            className={Input.container}
            type="text"
            placeholder="title"
            value={title}
            onChange={onTitleChange}
            required={true}
            style={{
              fontSize: `${settings.titleFontSize}px`, 
              color: `${settings.titleFontColor}`,
            }}
          />
          <textarea
            className={Input.container}
            value={description}
            placeholder="description"
            onChange={onDescriptionChange}
            required={true}
            style={{
              fontSize: `${settings.descriptionFontSize}px`,
              color: `${settings.descriptionFontColor}`,
            }}
          />
          <CategoryFilter categories={categories} onCategorySelect={onCategoryChoose} filterClass={Input.container} />
          
          <div className={Container.themeListWrapper}>
            <div className={Container.themeListContainer}>
              <ThemeList />
            </div>
          </div>
          
          
        </form>
      </div>
      <button
        className={Button.primary_btn + " " + Button.btn__with_margin}
        onClick={onSubmit}
      >{actionName}</button>
    </>
  );
}

export default NoteForm;
