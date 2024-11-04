import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useContextUsuario } from '../Context/ContextProvider'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import ListaUsuario from "../Componentes/ListaUsuarios";

export default function FormularioContantos() {
  
    const {nombre,
        apellido, 
        correo, 
        telefono,
        fechaNacimiento,
        listaUsuarios,
        agregarUsuarios
        setNombre,
        setApellido,
        setCorreo,
        setTelefono,
        setFechaNacimiento
    } = useContextUsuario()

    return (
    <View>
      <Text>Formulario de Usuario</Text>

      <TextInput
      style={styles.input}
      placeholder='Nombre' value={nombre}
      onChangeText={setNombre}
      />

    <TextInput
    style={styles.input}
      placeholder='Apellido' value={apellido}
      onChangeText={setApellido}
      />

    <TextInput
    style={styles.input}
      placeholder='Correo' value={correo}
      onChangeText={setCorreo}
      />

    <TextInput
    style={styles.input}
      placeholder='Telefono' value={telefono}
      onChangeText={setTelefono}
      />    

    <TextInput
    style={styles.input}
      placeholder='Fecha de Nacimiento' value={fechaNacimiento}
      onChangeText={setFechaNacimento}
      /> 


        <Button title='Agregar Usuario' onPress={agregarUsuario}></Button>
        
        <ListaUsuario></ListaUsuario>
       
    </View>

    )
}

    const styles = StyleSheet.create({
        input:{
            height:40,
            borderColor: 'gray',
            borderWidth: 1,
            padding:10,
            paddingHorizontal: 10
        }

})


