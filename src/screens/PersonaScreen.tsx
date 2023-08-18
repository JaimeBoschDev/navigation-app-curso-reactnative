import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useContext} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

//interface ParamsRoute {
//    id:number,
//    nombre: string
//}

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  const {changeUserName} = useContext(AuthContext);

  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUserName(params.nombre);
  }, []);

  return (
    <View>
      <Text style={{color: 'black'}}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
