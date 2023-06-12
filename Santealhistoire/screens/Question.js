import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export default function Question () {
    const requestOptions = {
        method : 'POST',   
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({postName: 'React Updates'})

    }
    // const sendQuestion = async () =>  {
    //     try {
    //         const post = await axios.get('http://10.44.19.4/Santealhistoire/Back/PostQuestion.php', requestOptions)
    //     }
    // }
    return (
        <ImageBackground source={require('../assets/download.jpg')} style={styles.background}>
            <View style = {styles.container}>
                <Text>Posez une question afin de faire avancer notre application</Text>
                <TextInput style={styles.input}/>
                <Button sytle = {styles.send} onPress={sendQuestion}>Soumettre</Button>
            </View>
        </ImageBackground>    
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection:'column',
        justifyContent: 'space-around',
        alignItems : 'center',
    },
    background: {
      flex : 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    input: {
        height: 50,
        width:'100%',
        borderWidth:1,

    },
    send: {
        left : 15,
        height: 5,

        
    }
});