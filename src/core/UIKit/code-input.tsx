import React, { useState } from 'react';

interface CodeInputProps {
    length: number;
    className?: string;
    onComplete: (code: string) => void;
    onChange?: (value: string) => void;
}

export const CodeInput = ({ length, onComplete, onChange, className }: CodeInputProps) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(''));

    const handleChange = (value: string, index: number) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);

        if (value && index < length - 1) {
            const nextInput = document.getElementById(`code-input-${index + 1}`);
            if (nextInput) {
                (nextInput as HTMLInputElement).focus();
            }
        }

        onChange && onChange(newValues.join(''))
        if (newValues.every(val => val !== '')) {
            onComplete(newValues.join(''));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !values[index] && index > 0) {
            const prevInput = document.getElementById(`code-input-${index - 1}`);
            if (prevInput) {
                (prevInput as HTMLInputElement).focus();
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const paste = e.clipboardData.getData('text');
        const newValues = paste.split('').slice(0, length);
        const updatedValues = [...values];

        newValues.forEach((char, index) => {
            if (index < length) {
                updatedValues[index] = char;
            }
        });

        setValues(updatedValues);

        onChange && onChange(updatedValues.join(""));   

        // Если все поля заполнены, вызываем onComplete
        if (updatedValues.every(val => val !== '')) {
            onComplete(updatedValues.join(''));
        } else {
            // Переместить фокус на следующее незаполненное поле
            const nextEmptyIndex = updatedValues.findIndex(val => val === '');
            if (nextEmptyIndex !== -1) {
                const nextInput = document.getElementById(`code-input-${nextEmptyIndex}`);
                if (nextInput) {
                    (nextInput as HTMLInputElement).focus();
                }
            }
        }
    };


    return (
        <div className={className + " flex justify-between"}>
            {values.map((value, index) => (
                <input
                    onPaste={handlePaste}
                    key={index}
                    id={`code-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e.target.value.toUpperCase(), index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-[50px] h-[56px] text-center text-sm border-[#4A85F6] rounded-xl border-2 outline-none"
                />
            ))}
        </div>
    );
};