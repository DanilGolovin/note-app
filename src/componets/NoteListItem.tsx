import React from 'react';
import Note from '../styles/NoteItem.module.css';
import Container from '../styles/Container.module.css';
import { useHistory } from 'react-router';

type Props = typeof Note;

const NoteListItem = ({ title, description, id }: Props) => {
  const history = useHistory();

  const onNoteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string): void => {
    e.stopPropagation();
    history.push(`/${path}-note/${id}`);
  };

  return (
    <div className={Note.detail_link} onClick={(e) => onNoteClick(e, 'detail')}>
      <div className={Note.container}>
        <h2 className={Note.title}>{title}</h2>
        <p className={Note.description}>{description}</p>
        <div className={Container.center}>
          <div className={Note.link} onClick={(e) => onNoteClick(e, 'update')}>
            <span className={Note.edit_link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteListItem;
