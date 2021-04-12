import styled from 'styled-components/native';

import { COLORS } from '../../../../../theme'

export const Container = styled.View`
`;

export const Text = styled.Text`
color: ${COLORS.white};
font-size: 25px;
font-weight: bold;
`;

export const Touch = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: ${COLORS.esmerald};

width: 100%;
max-width: 300px;
height: 50px;

border-radius: 5px;
`;