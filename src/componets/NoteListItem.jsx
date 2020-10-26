import React from 'react';
import { connect } from 'react-redux';
import styles from './NoteItem.module.css';
import PropTypes from 'prop-types';

const NoteListItem = ({ title, id }) => (
  <div className={styles.container}>
    <h2>{title}</h2>
  </div>
);

NoteListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.any,
};

export default connect()(NoteListItem);
