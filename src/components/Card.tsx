import React, { FC, useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'ptimary',
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: React.ReactNode;
}

const Card: FC<CardProps> = ({ height, width, children, variant }) => {
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
        >
            {children}
        </div>
    );
};

export default Card;
