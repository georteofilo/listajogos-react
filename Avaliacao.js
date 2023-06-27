import * as React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './style';


export default function Avaliacao({props}) {
    return(
        <View style={styles.avaliacaoBox}>
            <Text style={styles.avaliacaoTitulo}>O quanto você indicaria esse jogo?</Text>
            <View style={styles.avaliacaoBtns}>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button  title=" 1 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button  title=" 2 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button  title=" 3 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button  title=" 4 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button  title=" 5 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button  title=" 6 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button  title=" 7 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button  title=" 8 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button   title=" 9 " color="#29A7DD"/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.avaliacaoBtn}>
                <Button title="10" color="#29A7DD"/>
              </TouchableOpacity>
            </View>
            <View style={styles.progressBar}>
                <Progress.Bar progress={props.avaliacao} width={260} color={'#29A7DD'} />
            </View>
        </View>
    );
}
