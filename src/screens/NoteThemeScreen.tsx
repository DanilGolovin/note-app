import React from 'react'
import Note from '../componets/Note';
import NoteSettings from '../styles/NoteSettings.module.css';
import Container from '../styles/Container.module.css';
import Button from '../styles/Button.module.css';
import CustomizationField from '../componets/CustomizationField';
import useSettings from '../hooks/useSettings';
import Modal from '../componets/Modal';
import ThemeList from '../componets/ThemeList';
import { useDispatch } from 'react-redux';
import { startDeleteNoteTheme } from '../redux/NoteTheme/note.theme.actions';

// SettingsType

const NoteThemeScreen = () => {
    const dispatch = useDispatch()
    const { settings, onSaveSettings, onUpdateTheme } = useSettings()

    const [showModal, setShowModal] = React.useState(false);

    const onDeleteThemeBtnClick = (id: string) => {
        dispatch(startDeleteNoteTheme(id))
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: "100%", position: "relative"}}>
            <div className={Container.main}>
                <div style={{height: "100%"}} >
                    <div className={Container.createThemeWrapper}>
                        <h2>Create your theme</h2>
                        <Note themeSettings={settings} />
                    </div>
                    <div>
                        <h4>Saved themes:</h4>
                        <div className={Container.themeListWrapper}>
                            <div className={Container.themeListContainer}>
                                <ThemeList />
                            </div>
                        </div>
                    </div>
                    <div className={NoteSettings.sidebar}>
                        <CustomizationField fieldName="height" title="Height" type="size" min={100} />
                        <CustomizationField fieldName="width" title="Width" type="size" min={50} />
                        <CustomizationField fieldName="padding" title="Internal indent" type="size" />
                        <CustomizationField fieldName="borderRadius" title="Border radius" type="size" />
                        <CustomizationField fieldName="titleFontSize" title="Title font size" type="size" />
                        <CustomizationField fieldName="descriptionFontSize" title="Description font size" type="size" />
                        <CustomizationField fieldName="backgroundColor" title="Note background color" type="color-picker" />
                        <CustomizationField fieldName="titleFontColor" title="Title color" type="color-picker" />
                        <CustomizationField fieldName="descriptionFontColor" title="Description color" type="color-picker" />

                        <div className={Container.center}>
                            <button className={Button.btn + " " + Button.primary_btn} onClick={() => setShowModal(true)}>
                                {settings.id === '' ? "Save theme" : "Update theme"}
                            </button>
                            <button
                                className={Button.btn + " " + Button.primary_btn + " " + Button.delete_btn}
                                onClick={() => onDeleteThemeBtnClick(settings.id)}
                            >
                                Delete theme
                            </button>
                        </div>
                        {showModal && (
                            <Modal>
                                <h4>Do you want to apply the current theme to all notes?</h4>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <button
                                        className={Button.btn + " " + Button.primary_btn}
                                        onClick={() => {
                                            setShowModal(false)
                                            if (settings.id !== "") onUpdateTheme(true)
                                            else onSaveSettings(true)
                                        }}
                                    >
                                        yes
                                    </button>
                                    <button
                                        className={Button.btn + " " + Button.primary_btn}
                                        onClick={() => {
                                            setShowModal(false)
                                            if (settings.id !== "") onUpdateTheme()
                                            else onSaveSettings()
                                        }}
                                    >
                                        no
                                    </button>
                                
                                </div>
                            </Modal>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteThemeScreen