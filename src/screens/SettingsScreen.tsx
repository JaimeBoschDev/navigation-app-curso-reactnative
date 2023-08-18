import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTehem';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Usuario: {authState.username}</Text>
      {authState.favoriteIcon && (
        <View>
          <Text style={styles.subtitulo}> Tu icono Favotito es: </Text>
          <Icon name={authState.favoriteIcon} size={50} color="#900" />
        </View>
      )}
    </View>
  );
};
