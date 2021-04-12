import styled from 'styled-components/native';
import { COLORS } from '../../../../../theme';

export const InputTx = styled.TextInput`
border-bottom-width: 1px;
border-bottom-color: ${COLORS.darkgray};
border-radius: 5px;

font-weight: bold;
font-size: 18px;

width: 100%;
max-width: 300px;
`;