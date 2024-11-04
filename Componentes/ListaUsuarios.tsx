import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useContextUsuario } from "../Context/ContextProvider";

export default function ListaUsuario() {

  const { listaUsuario } = useContextUsuario();
  return (
    <FlatList
    data={listaUsuario}
    keyExtractor={(item,index) => index.toString()}
    renderItem={({item}) =>(
        <View style={styles.userItem}>
            <Text>{item.nombre} </Text>
            <Text>{item.Apellido} </Text>
            <Text>{item.Correo} </Text>
            <Text>{item.Telefono} </Text>
            <Text>{item.FechaNacimiento} </Text>
        </View>
    )} 

></FlatList>

  );
}
const styles = StyleSheet.create({
    listTitles: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
    }, 

    userItem: {
        borderWidth: 1, 
        borderColor: 'gray',
        padding: 10, 
        marginVertical: 5,
    },
});