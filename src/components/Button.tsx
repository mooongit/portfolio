import React from 'react';

type Props = {
    text: string;
    className?: string;
    onClick?: () => void;
};

export const Button: React.FC<Props> = ({text, className = '', onClick}) => {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
};
