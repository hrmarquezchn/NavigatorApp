import { View, Text } from 'react-native'
import React from 'react'
import ContextProvider from '../../Context/ContextProvider'
import FormularioContantos from '../../Componentes/FormularioContantos'
import { useTheme } from '../../Context/ThemeContext';

export default function Usuario() {
  const { isDarkTheme } = useTheme();

  return (
    <View style={[styles.container, isDarkTheme ? styles.dark : styles.light]}>
      
      <ContextProvider>
        <FormularioContantos/>
      </ContextProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#333333',
  },
});