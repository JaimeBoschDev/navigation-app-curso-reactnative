import React from 'react'
import { Text, View,Button } from 'react-native'
import { styles } from '../theme/appTehem'
import { useNavigation } from '@react-navigation/native'

export const Pagina2Screen =()=> {
  
  const navigator = useNavigation();

    return (
      <View style={styles.globalMargin}>
        <Text  style={styles.title}>Pagina1Screen</Text>

        
        <Button title='Pagina 3' onPress={()=> navigator.navigate("Pagina3Screen") } />
      </View>
    )
}

