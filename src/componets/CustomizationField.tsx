import React from 'react'
import useSettings from '../hooks/useSettings'
import ColorPicker from './ColorPicker'

type FieldType = 'color-picker' | 'text' | 'size'
type FieldNameType = 
    "height" |
    "width" |
    "padding" |
    "borderRadius" |
    "titleFontSize" |
    "descriptionFontSize" | 
    "titleFontColor" | 
    "descriptionFontColor" |
    "backgroundColor" | 
    "boxShadow"

type CustomizationProps = {
    fieldName: FieldNameType,
    title?: string,
    subtitle?: string,
    type?: FieldType,
    min?: number | string,
    max?: number | string,
}

const CustomizationField = ({fieldName, title, subtitle, type = 'text', min = 0, max} : CustomizationProps) => {

    const { settings, onUpdateSettings } = useSettings()
    
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        
        console.log('e.target.value in CustomizationField handleChange : ', e.target.value)
        onUpdateSettings(name, +e.target.value)
    }
  
  
    const value = +settings[fieldName]

   
    return (
        <div>
            {title && <h4>{title}</h4>}
            {subtitle && <h6>{subtitle}</h6>}  
          { type === "size" && <input value={value} type="number" style={{width: "100%"}} onChange={(e) => handleChange(e, fieldName)} min={min} max={max} />}
          { type === "color-picker" && <ColorPicker name={fieldName} /> }
          { type === "text" && <></>}
        </div>
    )
}
export default CustomizationField