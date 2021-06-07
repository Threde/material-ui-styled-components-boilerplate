import React from 'react';
import Button from '@material-ui/core/Button';  
import styled from 'styled-components'
/* import {ButtonTypes,ButtonKinds} from '../../base/colors' 
import {spacing, ButtonSizes} from '../../base/sizes'  */

type ButtonSizes = 'large' | 'medium' |'small';

const spacing: { [key in ButtonSizes]: number } = { large: 32, medium: 15, small: 8 } 


type ButtonKinds = 'primary' | 'secondary' | 'transparent' | 'outPrimary' | 'outSecondary';

type ButtonType = { background: string; hover: string; border: string; color: string }; 

const ButtonTypes: {[key in ButtonKinds]: ButtonType } = {
          primary: {background: '#4d66d8',     hover: '#4d66d8cc',   border: '',                  color: 'white'},
        secondary: {background: '#4db1eb',     hover: '#4db1ebc7',   border: '',                  color: '#333'},
      transparent: {background: 'transparent', hover: 'transparent', border: '',                  color: ''},
       outPrimary: {background: 'transparent', hover: 'transparent', border: '1px solid #4d66d8', color: '#4d66d8'},
     outSecondary: {background: 'transparent', hover: 'transparent', border: '1px solid #4db1eb', color: '#4db1eb'}
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

      border:${(props) => ButtonTypes[props.variants].border}!important;
       color:${(props) => ButtonTypes[props.variants].color}!important;

               background-color:${(props) => ButtonTypes[props.variants].background}!important; 
      &:hover {background-color:${(props) => ButtonTypes[props.variants].hover}!important};

       padding: 5px ${(props) => spacing[props.size]}px!important; 
         
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