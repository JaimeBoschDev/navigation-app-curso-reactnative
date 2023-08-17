import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTehem';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>

      <Icon name="rocket" size={50} color="#900" />
      <Icon name="american-football-outline" size={50} color="#900" />
      <Icon name="cog-outline" size={50} color="#900" />
      <Icon name="file-tray-full-outline" size={50} color="#900" />
      <Icon name="happy-outline" size={50} color="#900" />
      <Icon name="hammer-outline" size={50} color="#900" />
    </View>
  );
};
