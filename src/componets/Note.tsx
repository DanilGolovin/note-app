import React from 'react'

import NoteCss from '../styles/NoteItem.module.css';
import Container from '../styles/Container.module.css';
import useSettings from '../hooks/useSettings';

type NoteProps = {
    title?: string,
    description?: string,
}

const Note: React.FC<NoteProps> = ({title, description, children}) => {
    
    const { settings } = useSettings()

    return (
            <div 
                className={NoteCss.container}
                style={{
                    width: `${settings.width}px`, 
                    height: `${settings.height}px`,
                    padding: `${settings.padding}px`,
                    borderRadius: `${settings.borderRadius}px`,
                    backgroundColor: `${settings.backgroundColor}`,
                }}
            >
                <h2
                    className={NoteCss.title}
                    style={{
                        fontSize: `${settings.titleFontSize}px`, 
                        color: `${settings.titleFontColor}`,
                    }}
                >
                    {title || 'Note title'}</h2>
                <p 
                    className={NoteCss.description}
                    style={{
                        fontSize: `${settings.descriptionFontSize}px`,
                        color: `${settings.descriptionFontColor}`,
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