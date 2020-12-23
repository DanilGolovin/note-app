import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selelectTheme } from '../redux/NoteTheme/note.theme.actions';
// import useSettings from '../hooks/useSettings';
import NoteSettings from '../styles/NoteSettings.module.css';


import { defaultState } from '../types/default-state'
import Loader from './Loader';


const ThemeList = () => {
  const dispatch = useDispatch()
  const currentThemeId = useSelector((state: defaultState) => state.noteTheme.settings.id )

  const onThemeClick = (id: string) => {
    dispatch(selelectTheme(id))
  }
 
  const { themes, loading } = useSelector((state: defaultState) => state.noteTheme);

  if (loading) return <Loader /> 
  
  return (<>
    { 
      (themes.length > 0) && themes.map(theme => (
        <div
          key={theme.id}
          className={currentThemeId === theme.id ? NoteSettings.theme_preview__checked : NoteSettings.theme_preview}
          style={{backgroundColor: theme.backgroundColor, borderRadius: theme.borderRadius}}
          onClick={() => onThemeClick(theme.id)}  
        />
      ))
    }
  </>)
}

export default ThemeList;