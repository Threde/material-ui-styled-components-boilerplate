import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const StyledButton = styled(Button)<ButtonComponentProps>`
      margin:16px;
      color:black;
      background-color:blue!important; 
      ${(props) => props.primary === false && `background-color:lightblue!important;`} 
      ${(props) => props.primary === true && `color:white!important;`}
      
      ${(props) => props.size === 'large' && `padding: 16px;`}
      ${(props) => props.size === 'medium' && `padding: 12px;`}
      ${(props) => props.size === 'small' && `padding: 8px; font-size:10px!important`}
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