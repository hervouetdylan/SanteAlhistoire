import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";

export default function Rules({navigation}){
    return(
        <ImageBackground source={require('../assets/download.jpg')} style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.titre}>Règle du jeu : {"\n"}{"\n"}{"\n"}</Text>
                <Text style={styles.text}>
                Le but de Santé à l'histoire est simple. Lorsque votre noms sors vous avez une question que le maître 
                de jeu vous dit, vous répondez et la réponse sera ensuite afficher au dos.{"\n"}{"\n"}
                5 niveaux {"\n"}{"\n"}
                1 étoile : si vous avez gagnez Distribuez, Perdu : prenez 5 {"\n"}
                2 étoile : si vous avez gagnez Distribuez, Perdu : prenez 4 {"\n"}
                3 étoile : si vous avez gagnez Distribuez, Perdu : prenez 3 {"\n"}
                4 étoile : si vous avez gagnez Distribuez, Perdu : prenez 2 {"\n"}
                5 étoile : si vous avez gagnez Distribuez, Perdu : prenez 1 {"\n"}{"\n"}{"\n"}{"\n"}
                </Text>
                <Text style={styles.mention}>Created by Dylan Hervouet and Nicolas Rivalant</Text>
                <Button style={styles.button} title={"Game"} onPress={() => navigation.navigate('Play')}/>
            </View>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        backgroundColor: '#007aff',
        padding: 10,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
    }
});