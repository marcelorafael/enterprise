import React, { useState } from 'react'
import { View } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo'; // 
import Iconss from 'react-native-vector-icons/Fontisto';
import { COLORS, images } from '../../../../../../theme'
import { Button } from '../../../DS/Button'
import { Input } from '../../../DS/Input'
import { Container, CenterView, ImgBackground, ContainerInput, ContainerSecure, Img, Text, Title, TouchRegistrer, } from './SigIn.styles'

const SigIn = () => {
    const [secure, setSecure] = useState(true)
    return (
        <ImgBackground source={images.login} >
            <Container>
                <Img source={images.logo01} />
                <CenterView>
                    <ContainerInput>
                        <Icons name="user" color={COLORS.darkgray} size={20} />


                        <Input place="E-mail" placeColor={COLORS.darkgray} secure={false} />
                    </ContainerInput>

                    <ContainerInput>
                        <Icons name="lock" color={COLORS.darkgray} size={20} />

                        <ContainerSecure>
                            <Input place="******" placeColor={COLORS.darkgray} secure={secure} />
                            <TouchRegistrer style={{ marginLeft: -30 }} onPress={() => setSecure( secure ? false : true)}>
                                {secure
                                ? <Iconss name="smiling" color={COLORS.darkgray} size={20} />
                                : <Iconss name="smiley" color={COLORS.darkgray} size={20} />
                                }
                            </TouchRegistrer>
                        </ContainerSecure>
                    </ContainerInput>

                    <Button TextBtn="Entrar" />
                    <TouchRegistrer>
                        <Text> Registrar </Text>
                    </TouchRegistrer>

                </CenterView>

            </Container>
        </ImgBackground>
    )
}

export default SigIn;


// const image = { uri: "https://reactjs.org/logo-og.png" };

// const App = () => (
//   <View style={styles.container}>
//     <ImageBackground source={image} style={styles.image}>
//       <Text style={styles.text}>Inside</Text>
//     </ImageBackground>
//   </View>
// );