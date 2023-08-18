import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTehem';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Selecciona tu icono Favorito</Text>

      <TouchableIcon nameIcon="rocket" />
      <TouchableIcon nameIcon="american-football-outline" />
      <TouchableIcon nameIcon="cog-outline" />
      <TouchableIcon nameIcon="file-tray-full-outline" />
      <TouchableIcon nameIcon="happy-outline" />
      <TouchableIcon nameIcon="hammer-outline" />
    </View>
  );
};
