import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    scroll:{
        marginTop: 30,
    },

    container: {
      flex: 1,

      backgroundColor: '#3A3939',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  
    nav: {
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo:{
      color: '#fff',
      fontSize: 24,
      fontWeight:700,
      alignItems: 'center',
      justifyContent: 'center',
    },

    navBuscar: {
        backgroundColor: '#3A3939',
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buscar: {
        width: 300,
        height: 30,
        display: 'flex',
        flexDirection: 'row',
        borderColor: '#0D96D1',
        borderWidth: 2,
        borderRadius: 15,
        alignItems: 'center',
    },

    textBuscar: {
        color: "#fff",
        fontSize: 12,
        paddingLeft: 10,
    },

    btnBuscar: {
        marginLeft: 227,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgBuscar: {
        width: 15,
        height:15,
    },

    game:{
        width: 380,
        padding: 10,
        backgroundColor: '#067FB2',
        borderRadius: 10,
        marginTop: 10,
    },

    nomeJogo:{
        color: '#eee',
        fontSize: 20,
        fontWeight:700,
        marginBottom: 10,
        alignSelf: 'center',
    },

    componentes:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    logo:{
        width: 110,
        height: 150,
        marginLeft: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff',
        resizeMode: 'cover',
    },

    dadosJogo:{
        display: 'flex',
        justifyContent: 'center',
    },  

    titulocard:{
        color: '#eee',
        fontSize: 14,
        fontWeight:500,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
    },

    btnText:{
        color: '#eee',
        fontSize: 18,
        fontWeight:700,
        marginBottom: 5,
    },

    btnComprar:{
        marginRight: 25,
        padding: 10,
        backgroundColor: '#29A7DD',
        borderRadius: 10,
        alignSelf: 'center',
    },

    rodape:{
        backgroundColor: '#3A3939',
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    
    textRodape:{
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },

    textNome:{
        fontSize: 14,
        fontWeight: '700',
        color: '#0D96D1'
    },
    
    containerDetalhes: {
        flex: 1,
        backgroundColor: '#3A3939',
        display: 'flex',
        flexDirection: 'column',
    },

    detalhesTitulo:{
        color: '#eee',
        fontSize: 26,
        fontWeight:500,
        marginBottom: 5,
        padding: 10,
        display: 'flex',
        alignSelf: 'center',
    },

    poster:{
        flex: 1,
        width: 200,
        height: 300,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 15,
    },

    detalhesBox:{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    detalhesConteudo:{
        backgroundColor: '#3A3939',
        flex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingBottom: 15,
    },

    detalhesDado:{
        color: '#eee',
        fontSize: 14,
        fontWeight:400,
        padding: 4,
    },

    avaliacaoBox:{
        backgroundColor: '#3A3939',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avaliacaoBtns:{
        width: 200,
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },

    avaliacaoBtn:{
        margin: 3,
    },

    avaliacaoTitulo:{
        color: '#eee',
        fontSize: 15,
        fontWeight: 500,
    },

    progressBar:{
        marginTop: 10,
        marginBottom: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    valoresBox:{
        width: 320,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    valor:{
        margin:3,
        color:'#eee',
    },
    avaliacaoValor:{
        color: '#2ecc71',
        fontSize: 16,
    },

    avaliacaoText:{
        color: '#eee',
        fontSize: 16,
        marginBottom: 29,
        alignSelf: 'center', 
    },

    loginBackground:{
        flex:1,
        width:'100%',
        height:'100%',
    },
    loginBox:{
        marginTop: 180,
        width: 240,
        height: 350,
        backgroundColor: 'rgba(57,57,57,0.95)',
        borderColor: '#067FB2',
        borderWidth: 3,
        borderRadius: 24,
        alignSelf: 'center',
    },
    loginTitulo:{
        marginTop: 20,
        padding: 5,
        color: '#fff',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },

    loginLabel:{
        color: '#fff',
        fontSize: 14,
        marginLeft: 20,
        margin: 5,
    },

    input:{
        backgroundColor: '#fff',
        width: 200,
        alignSelf: 'center',
        paddingLeft: 5,
        paddingRight: 30,
        borderRadius: 4,
        marginBottom: 12,
    },

    iconContainer: {
        position: 'absolute',
        right: 25,
        top: 3,
    },

    btnLogar:{
        padding: 10,
        paddingHorizontal: 40, 
        backgroundColor: '#067FB2',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnLogarText:{
        fontSize: 18,
        fontWeight: 600,
        color: '#fff',

    },

  });
  
  export default styles;