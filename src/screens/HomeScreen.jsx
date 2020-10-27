import React from 'react';

import { NavLink } from 'react-router-dom';
import NoteList from '../componets/NoteList';
/*
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
*/
import styles from '../componets/Button.module.css';
import Container from '../componets/Container.module.css';

const HomeScreen = (props) => (
  <div className={Container.center}>
    <h1>Home Screen</h1>
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
    <NoteList />
  </div>
);

export default HomeScreen;
