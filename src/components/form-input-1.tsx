import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

interface MeuBotaoProps {
  placeholder: string;
  secureTextEntry: boolean;
}

const FormInput: React.FC<MeuBotaoProps> = ({ placeholder, secureTextEntry}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder= {placeholder}
      placeholderTextColor="#003f5c"
      secureTextEntry= {secureTextEntry}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default FormInput;
