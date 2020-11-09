import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NoteList from '../componets/NoteList';
import Input from '../styles/Input.module.css';
import Container from '../styles/Container.module.css';
import Button from '../styles/Button.module.css';
import CategoryFilter from '../componets/CategoryFilter';
import { Category } from '../types/category/category';

const HomeScreen = () => {
  const [categoryName, setCategoryName] = useState('all');

  const onCategoryChoose = (category: Category) => {
    setCategoryName(category.name);
  };

  return (
    <div className={Container.center}>
      <div className={Container.main}>
        <div className={Container.manu}>
          <div className={Container.category}>
            <CategoryFilter
              filterClass={Input.container + ' ' + Input.filter_select}
              onCategorySelect={() => onCategoryChoose}
            />
            <NavLink
              to={'/categories'}
              className={Button.primary_btn + ' ' + Button.add_category_btn}
            >
              Add New Category
            </NavLink>
          </div>
          <NavLink to={'/add-note'} className={Button.primary_btn}>
            + Add New Note
          </NavLink>
        </div>
        <NoteList categoryName={categoryName} />
      </div>
    </div>
  );
};

export default HomeScreen;
