import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import React from 'react';
import { useContextUsuario } from '../Context/ContextProvider';
import { useTheme } from '../Context/ThemeContext';
import ListaUsuario from './ListaUsuarios';

export default function FormularioContantos() {
  const { nombre, apellido, correo, telefono, fechaNacimiento, agregarUsuario, setNombre, setApellido, setCorreo, setTelefono, setFechaNacimiento } = useContextUsuario();
  const { isDarkTheme } = useTheme();

  return (
    <View style={[styles.container, isDarkTheme ? styles.dark : styles.light]}>
      <Text style={styles.title}>Formulario de Usuario</Text>
      <TextInput style={[
            styles.input,
            isDarkTheme ? 
            styles.darkInput : styles.lightInput
         ]} placeholder='Nombre' 
         value={nombre} 
         onChangeText={setNombre} 
         />

      <TextInput style={[
        styles.input, 
        isDarkTheme ? 
        styles.darkInput : styles.lightInput
        ]} placeholder='Apellido' 
        value={apellido} 
        onChangeText={setApellido} 
        />

      <TextInput style={[
        styles.input, 
        isDarkTheme ? 
        styles.darkInput : styles.lightInput
        ]} placeholder='Correo' 
        value={correo} 
        onChangeText={setCorreo} 
        />

      <TextInput style={[
        styles.input, 
        isDarkTheme ? styles.darkInput : styles.lightInput
        ]} placeholder='Teléfono' 
        value={telefono} 
        onChangeText={setTelefono} 
        />

      <TextInput style={[
        styles.input, 
        isDarkTheme ? styles.darkInput : styles.lightInput]} placeholder='Fecha de Nacimiento' 
        value={fechaNacimiento} onChangeText={setFechaNacimiento} 
        />

      <Button title='Agregar Usuario' 
      onPress={agregarUsuario} 
      />
      <ListaUsuario 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  light: {
    backgroundColor: '#ffffff',
  },
  dark: {
    backgroundColor: '#333333',
  },
  lightInput: {
    borderColor: 'gray',
    color: '#000000',
  },
  darkInput: {
    borderColor: '#555555',
    color: '#ffffff',
  },
});