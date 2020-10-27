import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import NoteList from '../componets/NoteList';
/*
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
*/
import styles from '../componets/Button.module.css';
import Container from '../componets/Container.module.css';
import CategoryFilter from '../componets/CategoryFilter';
import { setFilerCategory } from '../redux/Category/category.actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HomeScreen = (props) => {
  const [category, setCategory] = useState(props.categories[0]);

  const onCategoryChoose = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    console.log('set f c : ', category);
    // props.dispatch(setFilerCategory(category));
  }, [category]);

  return (
    <div className={Container.center}>
      <h1>Home Screen</h1>
      <CategoryFilter category={category} onCategorySelect={onCategoryChoose} />
      <div className={styles.addBtn}>
        <NavLink
          to={'/add-note'}
          style={{
            textDecoration: 'none',
            color: '#fff',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Add New Note
        </NavLink>
      </div>
      <NavLink
        to={'/categories'}
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
        Add New Category
      </NavLink>
      <NoteList category={category} />
    </div>
  );
};

HomeScreen.propTypes = {
  dispatch: PropTypes.func,
  categories: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(HomeScreen);
//export default HomeScreen;
