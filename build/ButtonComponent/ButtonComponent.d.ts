import React from 'react';
export interface ButtonComponentProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    onClick?: () => void;
}
export declare const ButtonComponent: React.FC<ButtonComponentProps>;
export default ButtonComponent;
