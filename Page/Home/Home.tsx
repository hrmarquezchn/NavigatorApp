import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../../Context/ThemeContext';

export default function Home() {

  const { isDarkTheme } = useTheme();
  return (
    <View style={[styles.container, isDarkTheme ? styles.dark : styles.light]}>
      <Text style={[styles.text, isDarkTheme ? styles.darkText : styles.lightText]}>Home</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#333333',
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
});