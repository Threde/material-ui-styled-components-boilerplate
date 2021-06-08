import React from 'react';
import Button from '@material-ui/core/Button';  
import styled from 'styled-components'
/* import {ButtonTypes,ButtonKinds} from '../../base/colors' 
import {spacing, ButtonSizes} from '../../base/sizes'  */

type ButtonSizes = 'large' | 'medium' |'small';

const spacing: { [key in ButtonSizes]: number } = { large: 40, medium: 20, small: 12 } 


type ButtonKinds = 'primary' | 'secondary' | 'outPrimary' | 'outSecondary' | 'disabled' | 'link' ;

type ButtonType = { background: string; hover: string;colors: string }; 

const ButtonTypes: {[key in ButtonKinds]: ButtonType } = {
          primary: {background: '#4d66d8', colors: '#fff',    hover: '#4d66d8cc',},
        secondary: {background: '#4db1eb', colors: '#444',    hover: '#4db1ebc7',},
       outPrimary: {background: 'none',    colors: '#4d66d8', hover: 'rgba(77,102,216,.12)'},
     outSecondary: {background: 'none',    colors: '#4db1eb', hover: 'rgba(77,177,235,.12)'},
         disabled: {background: '#d3d3d3', colors: '#808080', hover: 'none'},
             link: {background: 'none',    colors: '#4d66d8', hover: 'none'}
}

export interface ButtonComponentProps {
    variants?: ButtonKinds;
    size?: ButtonSizes;
    label?: string;
    onClick?: () => void;
}

const StyledButton = styled(Button)<ButtonComponentProps>`
      font-weight: bold!important;
      margin:8px!important;
      font-size: 14px!important;

      padding: 7px ${(props) => spacing[props.size]}px!important; 
      color:${(props) => ButtonTypes[props.variants].colors}!important;

      background-color:${(props) => ButtonTypes[props.variants].background}!important; 

      &:hover {
        background-color:${(props) => ButtonTypes[props.variants].hover}!important;
      }
      
      ${(props) => props.size === 'small' && `padding:2px 6px!important;`}
      ${(props) => props.variants === 'link' && `text-decoration:underline!important;`}
      ${(props) => props.variants === 'disabled' && `cursor:not-allowed!important;`}
      ${(props) => props.variants === 'outPrimary' && `box-shadow:inset 0 0 0 1.2px #4d66d8;`}
      ${(props) => props.variants === 'outSecondary' && `box-shadow:inset 0 0 0 1.2px #4db1eb;`}
`

export const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  
  const { variants = 'secondary', size = 'medium', label } = props

  return (
    <StyledButton variants={variants} size={size} {...props}>
         {label}
    </StyledButton>
  )
}

export default ButtonComponent