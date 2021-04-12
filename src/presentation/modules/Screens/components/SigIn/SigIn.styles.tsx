import styled from 'styled-components/native';
import { COLORS, FONTS } from '../../../../../../theme';

export const Container = styled.View`
flex: 1;
width: 100%;
height: 100%;

align-items: center;
justify-content: center;

background-color: ${COLORS.white};
opacity: 0.8;
`

export const CenterView = styled.View`
width: 90%;
height: 50%;

align-items: center;
justify-content: space-between;

padding: 20px;
`

export const ContainerInput = styled.View`
flexDirection: row;
 align-items:center;
`;

export const ContainerSecure = styled.View`
flexDirection: row;
align-items:center;
`;

export const TouchRegistrer = styled.TouchableOpacity`
margin-top: 5px;
`;

export const Text = styled.Text`
color: ${COLORS.darkgray};
`;
export const Title = styled.Text`
font-size: 40px;

color: ${COLORS.darkgray};
`;

export const Img = styled.Image`
width:250px; 
height:150px; 
border-radius:50px;
margin-bottom: 50px;
`;

export const ImgBackground = styled.ImageBackground`
flex: 1;
resize-mode: cover;
justify-content: center;
`;