import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '../styles/Container.module.css';
import Button from '../styles/Button.module.css';
import Input from '../styles/Input.module.css';
import Form from '../styles/Form.module.css';
import PropTypes from 'prop-types';
import { addCategory, deleteCategory } from '../redux/Category/category.actions';

const CategoriesScreenProps = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
  categories: PropTypes.array,
};

function CategoriesScreen(props) {
  const { categories, dispatch } = props;

  const [filterCategories, setFilterCategories] = useState(categories);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
    setError('');
  };

  const hasCategory = () => {
    return categories.some(({ name }) => name === category.toLowerCase());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (hasCategory()) setError('This category already exists!');
    else if (category === '') setError('Category should not be empty!');
    else {
      dispatch(addCategory({ name: category.toLowerCase() }));
      setCategory('');
      setError('');
    }
  };

  useEffect(() => {
    setFilterCategories(categories);
  }, [categories]);

  return (
    <div className={Container.center}>
      <h1>Add category</h1>
      {error}
      <form className={Form.wrapper} onSubmit={onSubmit}>
        <input
          className={Input.container}
          type="text"
          placeholder="category"
          value={category}
          onChange={onCategoryChange}
        />
        <button className={Button.primary_btn + ' ' + Button.btn__with_margin}>Add Category</button>
      </form>
      {filterCategories.map((category) => (
        <div key={category.name} className={Container.align_items__center}>
          {category.name}
          <button
            className={Button.delete_category_btn}
            onClick={() => dispatch(deleteCategory(category))}
          ></button>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

CategoriesScreen.propTypes = CategoriesScreenProps;

export default connect(mapStateToProps)(CategoriesScreen);
