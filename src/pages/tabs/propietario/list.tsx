import React from "react";

import { 
    useState,
    useEffect,
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    FlatList,
} from "react-native";

import * as Animatable from 'react-native-animatable';

import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';

import Search from "../vistoria/new";

import ListItem from "../../../components/ListItem";

import pData from "../../../databases/pData";

export default function ListP() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState(''); 
    const handleOrderClick = () => {}; 
    const [ list, setList ] = useState(pData);

    useEffect(() => {
        if(searchText == '') {
            setList(pData);
            return;
        } else {
            setList(
                pData.filter( (item) => item.name.indexOf(searchText) > -1 )
            );
        }
    }, [searchText]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.textHeader}> Lista de Propietários </Text>
            </View>
            <View style={styles.searchArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar Propietário"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value=  { searchText }
                    onChangeText={ (t) => setSearchText(t) }
                />
                <TouchableOpacity 
                    style={styles.searchButton}
                    onPress={ handleOrderClick }
                >
                    <Ionicons name="search" size={24} color={'#fff'} />
                </TouchableOpacity>
            </View>
            <FlatList 
                style={styles.listP}
                data={list}
                renderItem={({ item }) => <ListItem data={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: '100%',
        backgroundColor: '#fff',
    },

    searchArea: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 30,
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

    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 40,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#000',
        borderColor: '#000',
        borderWidth: 1,
    },

    searchButton: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        width: 50,
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },

    listP:{
        flex: 1,
        width: '100%',
    },
});