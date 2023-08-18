import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from '../theme/appTehem';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Ven y logeate</Text>

      {!authState.isLoggedIn && <Button title="SingIn" onPress={signIn} />}
    </View>
  );
};
