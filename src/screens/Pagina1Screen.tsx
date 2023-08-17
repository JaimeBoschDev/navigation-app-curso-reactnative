import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {colores, styles} from '../theme/appTehem';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 8,
          }}
          onPress={() => {
            navigation.navigate('SettingsScreen');
          }}>
          <Icon name="settings-outline" size={30} color={colores.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Icon name="man-outline" size={30} color="white" />
          <Text style={styles.botonGrandeTexto}> Ir a Pedro </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Icon name="woman-outline" size={30} color="white" />
          <Text style={styles.botonGrandeTexto}> Ir a Maria </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
