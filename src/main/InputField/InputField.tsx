import React, { ReactElement } from 'react';

import { Input } from './InputFieldStyles';

interface InputFieldProps {
    value: string
    onChange:(newValue: string) => void;
    onBlur:(newValue: string) => void;
}

const InputField = ({ value, onBlur, onChange }: InputFieldProps) => {
    return (
        <Input
            onChange={(e) => onChange(e.target.value)}
            onBlur={(e) => onBlur(e.target.value)}
            value={value ? value : ''}
        />
    );
}

export default InputField;