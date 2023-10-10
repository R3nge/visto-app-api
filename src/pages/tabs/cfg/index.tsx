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

export default function Cfg() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>
                Cfg
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
});