import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';

const NoteList = (props) => {
  const [notes, setNotes] = useState(props.notes || []);
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
};

export default connect(mapStateToProps)(NoteList);
