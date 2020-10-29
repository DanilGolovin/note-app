import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import Container from '../styles/Container.module.css';

const NoteListProps = {
  notes: PropTypes.array.isRequired,
  category: PropTypes.any,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const NoteList = (props) => {
  const { category, notes, history } = props;

  const [listNotes, setListNotes] = useState(notes);

  useEffect(() => {
    if (category === 'all') setListNotes(notes);
    else setListNotes(notes.filter((note) => note.category === category));
  }, [category, notes]);

  return (
    <div className={Container.note_list}>
      {listNotes.length !== 0
        ? listNotes.map((note) => {
            return <NoteListItem history={history} key={note.id} {...note} />;
          })
        : 'no notes'}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

NoteList.propTypes = NoteListProps;

export default connect(mapStateToProps)(NoteList);
