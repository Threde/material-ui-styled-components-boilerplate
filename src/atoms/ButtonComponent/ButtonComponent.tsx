import React from 'react';
import Button from '@material-ui/core/Button';  
import styled from 'styled-components'
/* import {ButtonTypes} from '../../base/colors' */
/* import {spacing} from '../../base/sizes' */

type ButtonSizes = 'large' | 'medium' |'small';

const spacing: {[key in ButtonSizes]: number} = {
      large: 32,
      medium: 16,
      small: 8,
} 

type ButtonKinds = 'primary' | 'secondary' | 'transparent';

type ButtonType = { background: string; hover: string; };

const ButtonTypes: {[key in ButtonKinds]: ButtonType} = {

          primary: {background: '#4d66d8',   hover: '#7280ce'},
        secondary: {background: '#4db1eb',   hover: 'lightblue'},
      transparent: {background: 'transparent', hover: 'transparent'}
} 

export interface ButtonComponentProps {
    variants?: ButtonKinds;
    backgroundColor?: string;
    size?: ButtonSizes;
    label?: string;
    onClick?: () => void;
}

const StyledButton = styled(Button)<ButtonComponentProps>`

      margin:8px!important;
      background-color: ${(props) => ButtonTypes[props.variants].background}!important;
      &:hover {background-color:${(props) => ButtonTypes[props.variants].hover}!important};
      padding: ${(props) => spacing[props.size]}px;

`

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
    variants = 'secondary',
    size = 'medium',
    backgroundColor,
    label,
    ...props
}) => {
  
  return (
    <StyledButton
         size={size}
         variants={variants}
         style={{ backgroundColor }}
         {...props}
    >
         {label}
    </StyledButton>
  );
};

export default ButtonComponent