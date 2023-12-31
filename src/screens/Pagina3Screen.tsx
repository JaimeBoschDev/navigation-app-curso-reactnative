import React from 'react'
import { Text, View,Button } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTehem'


interface Props extends StackScreenProps<any,any>{};

export const Pagina3Screen =( {navigation} : Props)=> {
  
    return (
      <View style={styles.globalMargin}>
        <Text  style={styles.title}>Pagina1Screen</Text>

        <Button title='Regresar' onPress={()=> navigation.pop() } />
        <Button title='Home' onPress={()=> navigation.popToTop() } />
      </View>
    )
}

