import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props}) => {
    return (
        <button
            style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
            {...props}
        >
        {children}
        </button>
    )
};