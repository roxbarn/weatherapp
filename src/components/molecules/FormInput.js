import React from 'react'
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';

const FormInput = ({ label, type, name, ...props }) => {
    return (
        <div>
            <Label name={name}>{label} </Label>
            {type === 'text' && <TextInput name={name} />}
            <Button />
        </div>
    )
}

export default FormInput


