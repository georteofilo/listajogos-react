import React, { useState } from 'react';
import { TextInput, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

const MyPasswordField = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
 
  const handleChangePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        secureTextEntry={!showPassword}
        onChangeText={handleChangePassword}
        value={password}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.iconContainer}>
        <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};


export default MyPasswordField;
