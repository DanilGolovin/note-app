import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '../componets/Container.module.css';
import Form from '../componets/Form.module.css';
import PropTypes from 'prop-types';
import { addCategory, deleteCategory } from '../redux/Category/category.actions';
import { NavLink } from 'react-router-dom';

function CategoriesScreen(props) {
  const [categories, setCategories] = useState(props.categories);
  const [category, setCategory] = useState('');
  console.log(props);
  const onCategoryChange = (e) => {
    const categoryName = e.target.value;
    setCategory(categoryName);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(addCategory({ name: category.toLowerCase() }));
    setCategory('');
  };

  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  return (
    <div className={Container.center}>
      <h1>Add category</h1>
      <form className={Form.wrapper} onSubmit={onSubmit}>
        <input type="text" placeholder="category" value={category} onChange={onCategoryChange} />
        <button>Add Category</button>
      </form>
      {categories.map((category) => (
        <div key={category.name}>
          {category.name}
          <button onClick={() => props.dispatch(deleteCategory(category))}>delete</button>
        </div>
      ))}
      <NavLink
        to={'/'}
        style={{
          textDecoration: 'none',
          color: '#21a6ff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Back
      </NavLink>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

CategoriesScreen.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func,
  categories: PropTypes.array,
};

export default connect(mapStateToProps)(CategoriesScreen);
