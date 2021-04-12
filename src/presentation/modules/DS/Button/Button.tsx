import React from 'react';

import { Container, Text, Touch } from './Button.styles';

export interface ButtonProps {
    TextBtn: string,
}


const Button: React.FC<ButtonProps> = (
    props: ButtonProps
) => {
    const {TextBtn} = props;
    return (
        <Touch>
            <Text>{TextBtn}</Text>
        </Touch>
    )
}

export default Button;