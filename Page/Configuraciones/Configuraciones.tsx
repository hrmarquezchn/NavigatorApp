import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '../../Context/ThemeContext';

export default function Configuraciones() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, isDarkTheme ? styles.dark : styles.light]}>
      <Text style={styles.text}>Configuraciones</Text>
      <Button
        title={`Cambiar a tema ${isDarkTheme ? 'claro' : 'oscuro'}`}
        onPress={toggleTheme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    marginBottom: 20,
  },
  light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#333333',
  },
});