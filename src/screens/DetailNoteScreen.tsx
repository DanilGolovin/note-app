import React, { useMemo } from 'react';
import Container from '../styles/Container.module.css';
import { useParams } from 'react-router';
import { Note } from '../types/note/note';

type Props = {
  notes: Note[];
};

const DetailNoteScreen = ({ notes }: Props) => {
  const { id }: { id: string } = useParams();

  const note = useMemo(() => notes.find((note) => note.id === id), [id, notes]);

  return (
    <div className={Container.center}>
      <div className={Container.detail_wrapper}>
        <h2>{note ? note.title : 'title doesnt exists'}</h2>
        <p>{note ? note.description : 'description doesnt exists'}</p>
      </div>
    </div>
  );
};

export default DetailNoteScreen;
