import { RGBColor } from 'react-color';

export const convertFromRGB = (color: RGBColor): string => `rgba(${Object.values(color).map(c => c).join(',')})`;

export const convertFromStringToRBG = (color: string): RGBColor => {
  const parsed = color.substring(5).replace(/\)/ig, '').split(',').map(v => Number(v));
  return {
    r: parsed[0] || 0,
    g: parsed[1] || 0,
    b: parsed[2] || 0,
    a: parsed[3] || 0,
  }
}