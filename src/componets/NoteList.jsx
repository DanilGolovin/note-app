import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import selectNotes from '../selectors/notes';

const NoteList = (props) => {
  const [notes, setNotes] = useState(props.notes);

  useEffect(() => {
    if (props.category === 'all' || props.category.name === 'all') setNotes(props.notes);
    else setNotes(props.notes.filter((note) => note.category === props.category));
  }, [props.category, props.notes]);

  return (
    <div>
      <h3>Note List</h3>
      {notes.length !== 0
        ? notes.map((note) => {
            return <NoteListItem key={note.id} {...note} />;
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

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  category: PropTypes.object,
};

export default connect(mapStateToProps)(NoteList);
