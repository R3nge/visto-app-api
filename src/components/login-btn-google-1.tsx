import React from 'react';
import { 
    TouchableOpacity, 
    Text,
    StyleSheet,
    Image,
} from 'react-native';

interface MeuBotaoProps {
    textBtn: string;
    onPress: () => void;
}

const GoogleButton: React.FC<MeuBotaoProps> = ({ textBtn, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.btn}
            onPress={onPress}
        >
            <Image
                source={require('../../assets/icon.png')}
                style={{ width: 25, height: 25, borderRadius: 100, marginRight: 10 }}
            />
            <Text style={styles.text}>
                {textBtn}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        width: 250,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
});

export default GoogleButton;
