import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator'


//interface ParamsRoute {
//    id:number,
//    nombre: string
//}

interface Props extends StackScreenProps<RootStackParams,"PersonaScreen">{};

export const PersonaScreen = ( {route, navigation }: Props) => {

    const params = route.params ;

    useEffect(() => {
      navigation.setOptions({
         title: params.nombre
      })
    }, [])
    

  return (
    <View>
        <Text style={{color:'black'}}>{
            JSON.stringify(params, null, 3)
}</Text>
        </View>
  )
}
