import React from "react";

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,

} from "react-native";

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form' //Importando react hook

export default function Search() {
    const navigation = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm({}) //estabelecendo controller
    return (
        
            <View style={styles.containerForm}>
                    <View style={styles.form}>
                    <Text style={styles.inputTitle} > Imovel </Text>
                    <Controller
                        control={control}
                        name="Imovel"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onChangeText={onChange}
                                onBlur={onBlur}//Ativado somente quando o textinput é tocado
                                value={value}
                            />
                        )}
                    />
                    <Text style={styles.inputTitle}> Data inicio </Text>
                    <Controller
                        control={control}
                        name='senha'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onChangeText={onChange}
                                onBlur={onBlur}//Ativado somente quando o textinput é tocado
                                value={value}
                            />
                        )}
                    />
                    <Text style={styles.inputTitle}> Data Fim </Text>
                    <Controller
                        control={control}
                        name='senha'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onChangeText={onChange}
                                onBlur={onBlur}//Ativado somente quando o textinput é tocado
                                value={value}
                            />
                        )}
                    />
                     <Text style={styles.inputTitle}> Vistoriador </Text>
                    <Controller
                        control={control}
                        name='senha'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onChangeText={onChange}
                                onBlur={onBlur}//Ativado somente quando o textinput é tocado
                                value={value}
                            />
                        )}
                    />
                     <Text style={styles.inputTitle}> FORMULARIO </Text>
                    <Controller
                        control={control}
                        name='senha'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
                                onChangeText={onChange}
                                onBlur={onBlur}//Ativado somente quando o textinput é tocado
                                value={value}
                            />
                        )}
                    />
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text
                            style={styles.buttonText}
                            onPress={() => navigation.navigate('Tabs')}
                        >
                            SALVAR
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>

                </View>
            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#345b2b',
    },

    containerHeader: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 30,
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    button: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        width: '65%',
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    containerForm: {
        flex: 2,
        width: '100%',
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

    inputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        alignSelf: 'flex-start',
        marginLeft: '10%',
    },

    input: {
        marginTop: 5,
        marginBottom: 20,
        padding: 7,
        borderRadius: 30,
        width: '80%',
        backgroundColor: '#fff',
    },

    buttonLogin:{ 
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        width: '40%',
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});