import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '../componets/Container.module.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const Props = {
  title: PropTypes.string,
  notes: PropTypes.array.isRequired,
};

const DetailNoteScreen = (props) => {
  const params = useParams();
  const [note, setNote] = useState(props.notes.find((note) => note.id === params.id));
  console.log(note);
  return (
    <div className={Container.center}>
      <h1>Detail page</h1>
      <h2>{note.title}</h2>
      <p>{note.description}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

DetailNoteScreen.propTypes = Props;

export default connect(mapStateToProps)(DetailNoteScreen);
