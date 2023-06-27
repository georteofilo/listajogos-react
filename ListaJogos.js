import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import Banner from './Banner';
import {jogos} from './Base'
import Detalhes from './Detalhes';

export default function Loja({navigation}) {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Text style={styles.titulo}>GAMES MOC</Text>
          </View>
          <View style={styles.navBuscar}>
            <View style={styles.buscar}>
              <Text style={styles.textBuscar}>Buscar</Text>
              <View style={styles.btnBuscar}>
                  <Image style={styles.imgBuscar} source={require('./img/bt-buscar.png')}/>
              </View>
            </View>
          </View>
          
          {jogos.map((item,index) => (
            <TouchableOpacity key={item.nome} onPress={() => navigation.navigate('Detalhes', {...item})}>
              <Banner key={index}props={item}/>
            </TouchableOpacity>
          ))}

          <View style={styles.rodape}>
            <Text style={styles.textRodape}>App criado por </Text>
            <Text style={styles.textNome}>George Rocha</Text>
          </View>

        </View>
      </ScrollView>
    );
  }