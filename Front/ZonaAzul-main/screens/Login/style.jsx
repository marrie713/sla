import { StyleSheet } from "react-native";

export const Homestyle = StyleSheet.create({
    root: {
        backgroundColor: '#1c1c2b',
        height: '100%',
        alignItems: 'center',
        gap: 60
    },

    Titulo: {
        fontSize: 30,
        color: '#fff',
        fontWeight: "bold",
    },

    TituloLogin: {
        color: '#bef264',
        fontSize: 30,
        fontWeight: 'bold'
    },

    Logo: {
        alignItems: 'center',
        marginTop: 120,
        gap: 20,
    },

    card: {
        backgroundColor: '#3e3e50',
        height: 400,
        width: 300,
        borderRadius: 30,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input:{
        backgroundColor: '#71717d',
        height: 50,
        width: 250,
        marginTop: 40
    },

    button: {
        backgroundColor: '#bef264',
        height: 60,
        width: 250,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginTop: 50

    },
    
})