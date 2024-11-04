import { View, Text } from 'react-native'
import React from 'react'
import ContextProvider from '../../Context/ContextProvider'
import FormularioContantos from '../../Componentes/FormularioContantos'

export default function Usuario() {
  return (
    <View>
      
      <ContextProvider>
        <FormularioContantos/>
      </ContextProvider>
    </View>
  )
}