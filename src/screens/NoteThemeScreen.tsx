import React from 'react'
import NoteThemeForm from '../componets/NoteThemeForm';
import NoteSettings from '../styles/NoteSettings.module.css';
import Container from '../styles/Container.module.css';

const NoteThemeScreen = () => {
    

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: "100%", position: "relative"}}>
            <div className={Container.main}>
                <div style={{height: "100%"}} >
                    <div className={Container.createThemeWrapper}>
                        <h2>Create your theme</h2>
                        <NoteThemeForm />
                    </div>
                    <div className={NoteSettings.sidebar}>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NoteThemeScreen