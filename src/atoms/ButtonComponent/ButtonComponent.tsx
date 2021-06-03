import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

import {med,xlarge,small} from '../../base/sizes'
import { black, white, secondary, primary } from '../../base/colors'

const StyledButton = styled(Button)<ButtonComponentProps>`
      margin:${xlarge}px;
      color:${black};
      background-color:${primary}; 
      ${(props) => props.primary === false && `background-color: ${secondary};`} 
      ${(props) => props.primary === true && `color:${white};`}
      
      ${(props) => props.size === 'large' && `padding: ${xlarge}px;`}
      ${(props) => props.size === 'medium' && `padding: ${med}px;`}
      ${(props) => props.size === 'small' && `padding: ${small}px;font-size:${small+4}px!important`}
`

export interface ButtonComponentProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  
  return (
    <StyledButton
         size={size}
         primary={primary}
         style={{ backgroundColor }}
         {...props}
    >
      {label}
    </StyledButton>
  );
};
export default ButtonComponent