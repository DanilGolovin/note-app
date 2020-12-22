import React, { useEffect, useState } from 'react';
import NoteListItem from './NoteListItem';
import Container from '../styles/Container.module.css';
import { Note } from '../types/note/note';
import { useSelector } from 'react-redux';
import { defaultState } from '../types/default-state';

type Props = {
  categoryName: string;
};

const NoteList = ({ categoryName }: Props) => {
  const notes = useSelector((state: defaultState) => state.notes.notes);
  const [listNotes, setListNotes] = useState(notes);

  useEffect(() => {
    console.log('useEffect in NoteList : ', categoryName)
    if (categoryName === 'all') setListNotes(notes);
    else setListNotes(notes?.filter((note: Note) => note.category.name === categoryName));
  }, [categoryName, notes, setListNotes]);

  return (
    <div className={Container.note_list}>
      {listNotes?.length > 0
        ? listNotes?.map((note: Note) => (
            <NoteListItem key={note.id} note={note} />
          ))
        : 'no note'}
    </div>
  );
};

export default NoteList;
