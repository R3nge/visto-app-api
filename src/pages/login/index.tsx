import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import GoogleButton from "../../components/login-btn-google-1";
import LoginButton from "../../components/login-btn-1";
import FormInput from "../../components/form-input-1";
import RegisterButton from "../../components/register-btn-1";

export default function Login() {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.containerHeader}>
                <Text style={styles.text}> Login </Text>
                <GoogleButton
                    textBtn="Fazer login com o Google"
                    onPress={() => navigation.navigate('Tabs')}
                />
            </View>


            <View style={styles.containerForm}>
                <View style={styles.formTitle}>
                    <Image
                        source={require('../../assets/line.svg')}
                        style={{ width: 70, height: 2, borderRadius: 100, marginRight: 5 }}
                    />
                    <Text style={styles.title}> Ou faça login com seu Email </Text>
                    <Image
                        source={require('../../assets/line.svg')}
                        style={{ width: 70, height: 2, borderRadius: 100, marginLeft: 5 }}
                    />
                </View>
                <View style={styles.form}>
                    <FormInput
                        placeholder="Digite seu email"
                        secureTextEntry={false}
                    />
                    <FormInput
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                    />
                    <LoginButton
                        textBtn="Login"
                        onPress={() => navigation.navigate('Tabs')}
                    />
                    <RegisterButton
                        text="Não tem conta?"
                        textBtn="Cadastre-se"
                        onPress={() => navigation.navigate('Register')}
                    />
                </View>
                <View>

                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ECFBE9',
    },

    containerHeader: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 30,
    },

    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    containerForm: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
    },

    formTitle: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
    },

    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },

    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});