import React, {useContext} from 'react';
import {View, Button, Text} from 'react-native';
import {} from 'react-native-paper';
import {AuthContext} from '../context/AuthContext';

export const ChatScreen = () => {
  const {authState, logOut} = useContext(AuthContext);

  return (
    <View>
      {authState.isLoggedIn && (
        <View>
          <Text>Deslogeate</Text>
          <Button onPress={logOut} title="Logout" />
        </View>
      )}
    </View>
  );
};
