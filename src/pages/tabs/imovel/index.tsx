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
import { Ionicons } from '@expo/vector-icons'

export default function Imovel() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.textHeader}> Imóveis </Text>
            </View>

            <View style={styles.containerOptions}>
                <View style={styles.options}>
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('NewInspection')}
                    >
                        <Ionicons name="home" size={40} color={'#fff'}/>
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Novo Imóvel</Text>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.navigate('PropertySearch')}
                    >
                        <Ionicons name="search" size={40} color={'#fff'}/>
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Procurar</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: '100%',
        backgroundColor: '#fff',
    },

    containerHeader: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#233d1d',
    },

    textHeader: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    containerOptions: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        paddingTop: 20,
    },

    options: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "33.33%",
        height: 100,
        backgroundColor: 'random',
        marginBottom: 10,
    },

    button: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#57874c', 
        width: 70,
        height: 70,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 5,
        borderWidth: 2,
        borderColor: "#233d1d",
        borderStyle: "solid",
    },

    buttonText: {
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});