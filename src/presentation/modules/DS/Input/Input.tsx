import React from 'react'
import { COLORS } from '../../../../../theme';
import { InputTx } from './Input.styles';

export interface InputProps {
    place: string,
    placeColor: string,
    secure: boolean
}

const Input: React.FC<InputProps> = (
    props: InputProps
) => {
    const { 
        place = "Digite Aqui...",
        placeColor = '#000',
        secure = false,
    } = props;
        
    return (
        <>
            <InputTx
                placeholder={place}
                placeholderTextColor={placeColor}
                secureTextEntry={secure}
                color={COLORS.esmerald}
            />
        </>
    )
}

export default Input