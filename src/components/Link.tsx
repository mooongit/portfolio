import React from 'react';

type Props = {
    text: string;
    href: string;
    className?: string;
};

export const Link: React.FC<Props> = ({href, text, className = ''}) => {
    return (
        <a href={href} className={className}>
            {text}
        </a>
    );
};
