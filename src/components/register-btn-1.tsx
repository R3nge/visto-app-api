import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View } from 'react-native-animatable';

interface MeuBotaoProps {
    text: string;
    textBtn: string;
    onPress: (  ) => void;
}

const RegisterButton: React.FC<MeuBotaoProps> = ({ text, textBtn, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
            <TouchableOpacity 
                style={styles.btn} 
                onPress={onPress}
            >
                <Text style={styles.textBtn}>
                    {textBtn}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    btn: {
        width: 'auto',
        paddingLeft: 5,
    },
    text: {
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    },
    textBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
});

export default RegisterButton;
