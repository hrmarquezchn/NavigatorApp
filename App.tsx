import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './Componentes/NavBar';
import { ThemeProvider } from './Context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
}