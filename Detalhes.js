import React from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity, Button, Alert} from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './style';
import {jogos} from './Base';


const comprarAlert = () =>
  Alert.alert(
    'Compra',
    'Jogo adicionado no carrinho!',
    [
      {
        text: 'OK',
      },
    ],
    {
      cancelable: true,
    },
  );

  const avaliacaoAlert = () =>
  Alert.alert(
    'Avaliacao',
    'Obrigado por votar!',
    [
      {
        text: 'OK',
      },
    ],
    {
      cancelable: true,
    },
  );


export default function Detalhes({route}) {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.containerDetalhes}>
          <Text style={styles.detalhesTitulo}>{route.params.nome}</Text>
          <Image style={styles.poster} source={route.params.img}/>
          <View style={styles.detalhesBox}>
            <View style={styles.detalhesConteudo}>
              <Text style={styles.detalhesDado}>Desenvolvedora: {route.params.desenvolvedora}</Text>
              <Text style={styles.detalhesDado}>Preço: R$ {route.params.preco}</Text>
              <Text style={styles.detalhesDado}>Plataforma: {route.params.plataforma}</Text>
              <Text style={styles.detalhesDado}>Conquistas: {route.params.conquistas}</Text>
              <Text style={styles.detalhesDado}>Gênero: {route.params.genero}</Text>
            </View>
            <TouchableOpacity onPress={comprarAlert}>
              <View style={styles.btnComprar}>
                  <Text style={styles.btnText}>COMPRAR</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.avaliacaoBox}>
            <Text style={styles.avaliacaoTitulo}>O quanto você indicaria esse jogo?</Text>
            <View style={styles.avaliacaoBtns}>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button onPress={avaliacaoAlert} title=" 1 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button onPress={avaliacaoAlert} title=" 2 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button onPress={avaliacaoAlert} title=" 3 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button onPress={avaliacaoAlert} title=" 4 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button  onPress={avaliacaoAlert}title=" 5 " color="#29A7DD"/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.progressBar}>
                <Progress.Bar progress={route.params.avaliacao/route.params.qnt/10} width={300} color={'#29A7DD'} />
                <View style={styles.valoresBox}>
                    <Text style={styles.valor}>0%</Text>
                    <Text style={styles.valor}>50%</Text>
                    <Text style={styles.valor}>100%</Text>
                </View>
          </View>
          <Text style={styles.avaliacaoText}><Text style={styles.avaliacaoValor}>{route.params.avaliacao/route.params.qnt*10}% </Text>dos Usuários indicam esse jogo!</Text>
        </View>
      </ScrollView>
    );
  }
