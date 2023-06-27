import * as React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './style';


export default function Banner({props}) {
    return(
        <View style={styles.game}>
            <Text style={styles.nomeJogo}>{props.nome}</Text>
            <View style={styles.componentes}>
                <View style={styles.dadosJogo}> 
                    <Text style={styles.titulocard}>Desenvolvedora: {props.desenvolvedora}</Text>
                    <Text style={styles.titulocard}>Preço: R$ {props.preco}</Text>
                    <Text style={styles.titulocard}>Plataforma: {props.plataforma}</Text>
                </View>
                <View style={styles.imagemJogo}>
                    <Image style={styles.logo} source={props.img}/>
                </View>
            </View>
        </View>
        
    );
}
