import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import note from './NoteItem.module.css';
import button from './NoteItem.module.css';
import Container from '../componets/Container.module.css';
import PropTypes from 'prop-types';

const NoteListItem = ({ title, id }) => {
  return (
    <div className={note.container}>
      <h2>{title}</h2>
      <div className={Container.center}>
        <NavLink to={`/update-note/${id}`}>
          <h3>update</h3>
        </NavLink>
        <NavLink to={`/detail-note/${id}`}>
          <h3>detail</h3>
        </NavLink>
      </div>
    </div>
  );
};

NoteListItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  dispatch: PropTypes.func,
};

export default connect()(NoteListItem);
