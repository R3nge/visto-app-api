import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,

} from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

import LoginButton from '../components/login-btn-1';
import RegisterButton from '../components/register-btn-1';

import Login from "./login";
import Register from "./register";

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Animatable.View
                style={styles.titleContainer}
                animation={'flipInX'}
            >
                <Text style={styles.title}>
                    Bem-vindo(a) ao Visto!
                </Text>
                <Text style={styles.subtitle}>
                    Aplicativo que organiza suas vistorias
                </Text>
            </Animatable.View>
            <Animatable.View
                style={styles.btn}
                animation={'fadeInUp'}
            >
                <LoginButton
                    textBtn="Login"
                    onPress={() => navigation.navigate('Login')}
                />
                <RegisterButton
                    text="Ainda não tem uma conta?"
                    textBtn="Cadastre-se"
                    onPress={() => navigation.navigate('Register')}
                />
            </Animatable.View>
            <Animatable.Image 
                source={require('../../src/images/bg-image.png')}
                style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1}}
                animation={'fadeInUp'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECFBE9',
    },

    btn: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },

    titleContainer: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },
});