import React from 'react';
import { connect } from 'react-redux';
import Note from '../styles/NoteItem.module.css';
import Container from '../styles/Container.module.css';
import PropTypes from 'prop-types';

const NoteListItemProps = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const NoteListItem = ({ title, description, id, history }) => {
  const onClick = (e) => {
    e.stopPropagation();
    history.push(`/detail-note/${id}`);
  };
  return (
    <div className={Note.detail_link} onClick={onClick}>
      <div className={Note.container}>
        <h2 className={Note.title}>{title}</h2>
        <p className={Note.description}>{description}</p>
        <div className={Container.center}>
          <div
            className={Note.link}
            onClick={(e) => {
              e.stopPropagation();
              history.push(`/update-note/${id}`);
            }}
          >
            <span className={Note.edit_link} />
          </div>
        </div>
      </div>
    </div>
  );
};

NoteListItem.propTypes = NoteListItemProps;

export default connect()(NoteListItem);
