import React from 'react';
import { Components, JSX } from '@htmlplus/core';

const CRC = () => {

    return ({ children, className, open, onClose }) => <h1>{children}</h1>
}

export const Dialog = CRC()