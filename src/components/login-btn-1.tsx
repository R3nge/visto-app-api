import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MeuBotaoProps {
  textBtn: string;
  onPress: () => void;
}

const LoginButton: React.FC<MeuBotaoProps> = ({ textBtn, onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{textBtn}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    height: 40,
    display: 'flex',
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

export default LoginButton;
