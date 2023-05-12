import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Rules({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.titre}>Règle du jeu : {"\n"}</Text>
            <Text style={styles.text}>
            Le but de Santé à l'histoire est simple. Lorsque votre noms sors vous avez une question que le maître 
            de jeu vous dit, vous répondez et la réponse sera ensuite afficher au dos.{"\n"}
            5 niveaux {"\n"} 
            1 étoile : si vous avez gagnez Distribuez, Perdu : prenez 5 {"\n"}
            2 étoile : si vous avez gagnez Distribuez, Perdu : prenez 4 {"\n"}
            3 étoile : si vous avez gagnez Distribuez, Perdu : prenez 3 {"\n"}
            4 étoile : si vous avez gagnez Distribuez, Perdu : prenez 2 {"\n"}
            1 étoile : si vous avez gagnez Distribuez, Perdu : prenez 5 {"\n"}
            </Text>
            <Text style={styles.mention}>Created by Dylan Hervouet and Nicolas Rivalant</Text>
            <Button title={"Game"} onPress={() => navigation.navigate('Play')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});