import React, { useMemo } from 'react';
import Container from '../styles/Container.module.css';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { defaultState } from '../types/default-state';

const DetailNoteScreen = ( ) => {
  const { id }: { id: string } = useParams();

  const notes = useSelector((state: defaultState) => state.notes.notes);
  const note = useMemo(() => notes && notes?.find((note) => note.id === id), [id, notes]);
  return (
    <div className={Container.column_flex + " " + Container.align_center}>
      <div className={Container.detail_wrapper}>
        {
          note ? <>
            <h2>{ note?.title }</h2>
            <p>{ note?.description }</p>
          </> : <p>note doesnt exists</p>
        }
      </div>
    </div>
  );
};

export default DetailNoteScreen;
