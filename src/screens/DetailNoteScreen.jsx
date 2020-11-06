import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import Container from '../styles/Container.module.css';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

const DetailNoteScreenProps = {
  title: PropTypes.string,
  notes: PropTypes.array.isRequired,
};

const DetailNoteScreen = (props) => {
  const { notes } = props;

  const params = useParams();
  const note = useMemo(() => notes.find((note) => note.id === params.id), [params.id, notes]);

  return (
    <div className={Container.center}>
      <div className={Container.detail_wrapper}>
        <h2>{note ? note.title : 'title doesnt exists'}</h2>
        <p>{note ? note.description : 'description doesnt exists'}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

DetailNoteScreen.propTypes = DetailNoteScreenProps;

export default connect(mapStateToProps)(DetailNoteScreen);
