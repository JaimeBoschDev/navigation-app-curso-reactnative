import React  from 'react'
import { createStackNavigator } from '@react-navigation/stack';



import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type RootStackParams={
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: { id:number, nombre: string},
    SettingsScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = ()=> {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle:{
                    backgroundColor: 'white'
                },
                headerStyle:{
                    elevation:0,
                    shadowColor:'transparent'
                }
            }
             
            }
        
        >
            <Stack.Screen name="Pagina1Screen" options={{title:"Página 1"}} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{title:"Página 2"}} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{title:"Página 3"}} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen"  component={PersonaScreen} />
            <Stack.Screen name="SettingsScreen" options={{title:"Ajustes"}} component={SettingsScreen} />
        </Stack.Navigator>
    );
}