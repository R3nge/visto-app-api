import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import FormInput from '../../../components/form-input-1';
import LoginBtn from '../../../components/login-btn-1';
import TabHeader from '../../../components/tab-header-1';

export default function App() {
  return (
    <View style={styles.container}>
      <TabHeader title="Novo Propietário"/>
      <View style={styles.form}>
        <FormInput 
          placeholder="Nome" 
          secureTextEntry={false}
        />
        <FormInput 
          placeholder="Endereço" 
          secureTextEntry={false}
        />
        <FormInput 
          placeholder="Email" 
          secureTextEntry={false}
        />
        <FormInput 
          placeholder="Telefone" 
          secureTextEntry={true}
        />
        <LoginBtn 
          textBtn="Cadastrar"
          onPress={() => console.log('Cadastrou')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 60,
  },
});
