import React, { useState } from 'react'
import { SketchPicker, RGBColor, ColorResult } from "react-color"
import useSettings from '../hooks/useSettings'
import { convertFromRGB, convertFromStringToRBG } from '../utils/color'

import NoteSettings from '../styles/NoteSettings.module.css';

type PickerProps = {
    name: string
}

const ColorPicker = ({name} : PickerProps) => {
    const { settings, onUpdateSettings } = useSettings()

    const [color, setColor] = useState<RGBColor>(convertFromStringToRBG(settings[name] as string));
    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    
    const onColorChange = (newColor: ColorResult) => {
        setColor(newColor.rgb)
    }

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker)
    };
    
    const handleClose = () => {
        setDisplayColorPicker(false)
    };

    const handleChange = (color: ColorResult) => {
        //@ts-ignore
        onUpdateSettings(name, convertFromRGB(color.rgb))
    };
    
    return (
        <>
            <div className={NoteSettings.swatch} onClick={handleClick}>
                <div className={NoteSettings.color} style={{backgroundColor: settings[name]}} />
            </div>
            {
                displayColorPicker ? 
                    <div className={NoteSettings.popover}>
                        <div className={NoteSettings.cover} onClick={handleClose}/>
                        <SketchPicker color={color} onChangeComplete={handleChange} onChange={onColorChange} />
                    </div>
                : null
            }
        </>
    )
}
export default ColorPicker