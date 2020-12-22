import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NoteList from '../componets/NoteList';
import Input from '../styles/Input.module.css';
import Container from '../styles/Container.module.css';
import Button from '../styles/Button.module.css';
import CategoryFilter, { defaultCategory } from '../componets/CategoryFilter';
import { useDispatch, useSelector } from 'react-redux';
import { defaultState } from '../types/default-state';
import { startGetNotes } from '../redux/Note/note.actions';
import Loader from '../componets/Loader';
import { startGetCategories } from '../redux/Category/category.actions';
import { Category } from '../types/category/category';

import CustomizationIcon from "../icons/customization.svg"
import { startGetNoteThemes } from '../redux/NoteTheme/note.theme.actions';

const HomeScreen = () => {
  const [category, setCategory] = useState(defaultCategory);
  const dispatch = useDispatch();

  const uid = useSelector((state: defaultState) => state.auth.user?.uid);
  const loading = useSelector((state: defaultState) => state.notes.loading);
  const categories = useSelector((state: defaultState) => state.categories.categories);
  
  const onCategoryChoose = (filterCategory: Category) => {
    setCategory(filterCategory);
  };

  useEffect(() => {
    uid && (dispatch(startGetNotes(uid)), dispatch(startGetCategories(uid)), dispatch(startGetNoteThemes()));
  }, [dispatch, uid]);

  return (
    <>
      <div className={`${Container.column_flex} ${Container.align_center}`}>
        <div className={Container.main}>
          <div className={Container.manu}>
            <div className={Container.category}>
              <CategoryFilter
                categories={categories}
                filterClass={Input.container + ' ' + Input.filter_select}
                onCategorySelect={onCategoryChoose}
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
          {loading ? <Loader /> : <NoteList categoryName={category.name} />}

          <div className={Container.customizationIconWrapper}>
          <NavLink to={'/note-themes'}>
            <img src={CustomizationIcon} alt="note theme customization" height="30px" width="30px" />
          </NavLink>
        </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
