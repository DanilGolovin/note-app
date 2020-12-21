import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../styles/Container.module.css';
import Button from '../styles/Button.module.css';
import Input from '../styles/Input.module.css';
import Form from '../styles/Form.module.css';
import Text from '../styles/Text.module.css';

import { startAddCategory, startDeleteCategory } from '../redux/Category/category.actions';
import { defaultState } from '../types/default-state';
import { Category } from '../types/category/category';

function CategoriesScreen() {
  const dispatch = useDispatch();
  const uid = useSelector((state: defaultState) => state.auth.user?.uid);

  const [filterCategories, setFilterCategories] = useState(
    useSelector((state: defaultState) => state.categories.categories),
  );

  const [categoryName, setCategoryName] = useState('');

  const [error, setError] = useState('');

  const onCategoryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCategoryName(e.target.value);
    setError('');
  };

  const hasCategory = () => {
    return (
      filterCategories && filterCategories.some(({ name }) => name === categoryName.toLowerCase())
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (hasCategory()) setError('This category already exists!');
    else if (categoryName === '') setError('Category should not be empty!');
    else if (categoryName.toLowerCase() === 'all') setError('You cannot create default category!');
    else {
      uid && dispatch(startAddCategory( uid,  {name: categoryName.toLowerCase(), id: '' }));
      setCategoryName('');
      setError('');

      setFilterCategories(filterCategories.concat({ name: categoryName, id: '' }));
    }
  };

  const onDeleteCategoryClick = (category: Category): void => {
    // console.log(category);
    uid && dispatch(startDeleteCategory(uid, category.id));
    setFilterCategories(filterCategories.filter(({ name }) => name !== category.name));
  };

  return (
    <div className={Container.column_flex + " " + Container.align_center}>
      <h1>Add category</h1>
      <p className={Text.error_message}>{error}</p>
      <form className={Form.wrapper} onSubmit={onSubmit}>
        <input
          className={Input.container}
          type="text"
          placeholder="category"
          value={categoryName}
          onChange={onCategoryChange}
        />
        <button className={Button.primary_btn + ' ' + Button.btn__with_margin}>Add Category</button>
      </form>
      {filterCategories &&
        filterCategories.map((category) => (
          <div key={category.name} className={Container.align_items__center}>
            {category.name}
            <button
              className={Button.delete_category_btn}
              onClick={() => onDeleteCategoryClick(category)}
            />
          </div>
        ))}
    </div>
  );
}

export default CategoriesScreen;
