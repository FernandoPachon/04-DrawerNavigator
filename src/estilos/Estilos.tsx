import { StyleSheet } from "react-native";


export const colores={
    primarios:'#5499C7',
    secundarios:'#D35400',
    terciarios:'#A569BD',
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:20,
    },
    margenGlobal:{
        marginHorizontal:20
    },
    title:{
        fontSize:35,
        marginBottom:10,
    },
    titulo:{
        fontSize:30,
        marginBottom:10,
        textAlign: 'center',
    },
    botonUsuario:{
        width:100,
        height:100,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BCFF60',
        marginRight: 10,
    },
    
    tituloBoton:{
        color: 'white',
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100,
    },
    cajaAvatar:{
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contenedorMenu: {
        marginVertical: 30,
        alignItems: 'center',
    },
    menuTexto:{
        fontSize:20,
    },
    menuBoton:{
        marginVertical:10,
    },
});