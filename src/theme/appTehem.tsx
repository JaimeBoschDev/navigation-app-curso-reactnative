import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6',
    red: 'red'
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        marginTop: 8
    },
    botonGrande:{
        width:150,
        height:100,
        backgroundColor:'red',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    botonGrandeTexto:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    }
})