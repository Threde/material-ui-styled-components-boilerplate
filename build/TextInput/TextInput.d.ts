import React from 'react';
import './TextInput.scss';
export interface TextInputProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}
export declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
