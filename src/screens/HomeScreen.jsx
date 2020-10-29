import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NoteList from '../componets/NoteList';
import Input from '../styles/Input.module.css';
import Container from '../styles/Container.module.css';
import Button from '../styles/Button.module.css';
import CategoryFilter from '../componets/CategoryFilter';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HomeScreenProps = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const HomeScreen = ({ history } = props) => {
  const [category, setCategory] = useState('');

  const onCategoryChoose = (category) => {
    setCategory(category);
  };

  return (
    <div className={Container.center}>
      <div className={Container.main}>
        <div className={Container.flexBetween}>
          <div className={Container.category}>
            <CategoryFilter
              class={Input.container + ' ' + Input.filter_select}
              category={category}
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
        <NoteList category={category} history={history} />
      </div>
    </div>
  );
};

HomeScreen.propTypes = HomeScreenProps;

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(HomeScreen);
