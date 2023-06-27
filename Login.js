import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';


import styles from './style';
import MyUserInput from './Textinput';
import MyPasswordField from './Inputpassword';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
            <ImageBackground
            source={require('./img/login_bg.jpg')}
            style={styles.loginBackground}
            >
                <View style={styles.loginBox}>
                    <Text style={styles.loginTitulo}>Login</Text>
                    <Text style={styles.loginLabel}>Usuário</Text>
                    <MyUserInput />
                    <Text style={styles.loginLabel}>Senha</Text>
                    <MyPasswordField />
                    <TouchableOpacity style={styles.btnLogar} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.btnLogarText}>Logar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        <StatusBar style="auto" />
    </View>
  );
}



