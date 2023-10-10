import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

interface MeuBotaoProps {
  title: string;
}

const TabHeader: React.FC<MeuBotaoProps> = ({ title }) => {
  return (
      <View style={styles.header}>
        <Text style={styles.text}>Novo Propietário</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
      width: '100%',
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      backgroundColor: '#233d1d',
      zIndex: 1,
      top: 0,
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TabHeader;
