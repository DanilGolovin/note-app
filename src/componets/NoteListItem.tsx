import React from 'react';
import NoteCss from '../styles/NoteItem.module.css';
import Container from '../styles/Container.module.css';
import { useHistory } from 'react-router';
import { Note } from '../types/note/note';

type Props = {
  note: Note
}

const NoteListItem = ({note} : Props) => {
  const history = useHistory();

  const onNoteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string): void => {
    e.stopPropagation();
    history.push(`/${path}-note/${note.id}`);
  };

  return (
    <div className={NoteCss.detail_link} onClick={(e) => onNoteClick(e, 'detail')}>
      <div className={NoteCss.container}>
        <h2 className={NoteCss.title}>{note.title}</h2>
        <p className={NoteCss.description}>{note.description}</p>
        <div className={Container.center}>
          <div className={NoteCss.link} onClick={(e) => onNoteClick(e, 'update')}>
            <span className={NoteCss.edit_link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteListItem;
