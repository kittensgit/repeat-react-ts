import React, { FC, useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'ptimary',
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
    children?: React.ReactNode;
}

const Card: FC<CardProps> = ({ height, width, children, variant, onClick }) => {
    const [value, setValue] = useState(0);
    return (
        <div
            style={{
                width,
                height,
                border:
                    variant === CardVariant.outlined
                        ? '1px solid gray'
                        : 'none',
                background: variant === CardVariant.primary ? 'gray' : 'none',
            }}
            onClick={() => onClick(value)}
        >
            {children}
        </div>
    );
};

export default Card;
