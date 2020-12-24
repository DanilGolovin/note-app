import React from 'react';
import NoteCss from '../styles/NoteItem.module.css';
import NoteComponent from '../componets/Note';
import { useHistory } from 'react-router';
import { Note } from '../types/note/note';
import { useSelector } from 'react-redux';
import { defaultState } from '../types/default-state';
import useSettings from '../hooks/useSettings';

type Props = {
  note: Note
}

const NoteListItem = ({note} : Props) => {
  const history = useHistory();
  const themes = useSelector((state: defaultState) => state.noteTheme.themes);
  const { settings } = useSettings()

  const onNoteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string): void => {
    e.stopPropagation();
    history.push(`/${path}-note/${note.id}`);
  };

  const getTheme = (themeId: string) => {
    return themes.find(({id}) => themeId === id) || settings;
  }

  return (
    <div className={NoteCss.detail_link} onClick={(e) => onNoteClick(e, 'detail')}>
      <NoteComponent title={note.title} description={note.description} themeSettings={getTheme(note.themeId)}>
        <div className={NoteCss.link} onClick={(e) => onNoteClick(e, 'update')}>
          <span className={NoteCss.edit_link} />
        </div>
      </NoteComponent>    
    </div>
  );
};

export default NoteListItem;
