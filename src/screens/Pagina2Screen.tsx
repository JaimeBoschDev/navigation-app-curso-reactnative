import React from 'react'
import { Text, View,Button } from 'react-native'
import { styles } from '../theme/appTehem'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any,any>{};

export const Pagina2Screen =({navigation} : Props)=> {

    return (
      <View style={styles.globalMargin}>
        <Text  style={styles.title}>Pagina1Screen</Text>

        
        <Button title='Pagina 3' onPress={()=> navigation.navigate("Pagina3Screen") } />





      </View>
    )
}

