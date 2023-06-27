import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from './style';

const MyUserInput = () => {
  return (
    <View >
        <TextInput
            style={styles.input}
        />
        <View style={styles.iconContainer}>
            <Ionicons name={"person"} size={20} color="black" />
        </View>
    </View>
  );
};
export default MyUserInput;
