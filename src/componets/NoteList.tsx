import React, { useEffect, useState } from 'react';
import NoteListItem from './NoteListItem';
import Container from '../styles/Container.module.css';
import { Note } from '../types/note/note';
import { useSelector } from 'react-redux';
import { defaultState } from '../types/default-state';

type Props = {
  categoryName?: string;
};

const NoteList = ({ categoryName }: Props) => {
  const notes = useSelector((state: defaultState) => state.notes);
  const [listNotes, setListNotes] = useState(notes);

  useEffect(() => {
    if (categoryName === 'all') setListNotes(notes);
    else setListNotes(notes?.filter((note: Note) => note.category === categoryName));
  }, [categoryName, notes]);

  return (
    <div className={Container.note_list}>
      {listNotes?.length !== 0
        ? listNotes?.map((note: Note) => {
            return <NoteListItem key={note.id} {...note} />;
          })
        : 'no note'}
    </div>
  );
};

export default NoteList;
