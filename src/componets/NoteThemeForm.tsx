import React from 'react'

import NoteCss from '../styles/NoteItem.module.css';
import Container from '../styles/Container.module.css';

const NoteThemeForm = () => {
    

    return (
            <div className={NoteCss.detail_link} >
                <div className={NoteCss.container}>
                    <h2 className={NoteCss.title}>Note title</h2>
                    <p className={NoteCss.description}>Note description</p>
                    <div className={Container.center}>
                       
                    </div>
                </div>
            </div>
           
    )
}

export default NoteThemeForm 