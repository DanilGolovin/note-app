import React from 'react'

import NoteCss from '../styles/NoteItem.module.css';
import Container from '../styles/Container.module.css';
import { SettingsType } from '../redux/NoteTheme/note.theme.reducer';

type NoteProps = {
    title?: string,
    description?: string,
    themeSettings: SettingsType,
}

const Note: React.FC<NoteProps> = ({title, description, themeSettings, children}) => {
    
    return (
            <div 
                className={NoteCss.container}
                style={{
                    width: `${themeSettings.width}px`, 
                    height: `${themeSettings.height}px`,
                    padding: `${themeSettings.padding}px`,
                    borderRadius: `${themeSettings.borderRadius}px`,
                    backgroundColor: `${themeSettings.backgroundColor}`,
                }}
            >
                <h2
                    className={NoteCss.title}
                    style={{
                        fontSize: `${themeSettings.titleFontSize}px`, 
                        color: `${themeSettings.titleFontColor}`,
                    }}
                >
                    {title || 'Note title'}</h2>
                <p 
                    className={NoteCss.description}
                    style={{
                        fontSize: `${themeSettings.descriptionFontSize}px`,
                        color: `${themeSettings.descriptionFontColor}`,
                    }}
                >
                    {description || 'Note description'}
                </p>
                <div className={Container.center}>
                  {children}  
                </div>
            </div>
           
    )
}

export default Note 