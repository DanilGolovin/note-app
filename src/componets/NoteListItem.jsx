import React from 'react';
import { connect } from 'react-redux';
import Note from '../styles/NoteItem.module.css';
import Container from '../styles/Container.module.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

const NoteListItemProps = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

const NoteListItem = ({ title, description, id }) => {
  const history = useHistory();

  const onNoteClick = (e, path) => {
    e.stopPropagation();
    history.push(`/${path}-note/${id}`);
  };

  return (
    <div className={Note.detail_link} onClick={(e) => onNoteClick(e, 'detail')}>
      <div className={Note.container}>
        <h2 className={Note.title}>{title}</h2>
        <p className={Note.description}>{description}</p>
        <div className={Container.center}>
          <div className={Note.link} onClick={(e) => onNoteClick(e, 'update')}>
            <span className={Note.edit_link} />
          </div>
        </div>
      </div>
    </div>
  );
};

NoteListItem.propTypes = NoteListItemProps;

export default connect()(NoteListItem);
