import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Rules({navigation}){
    return(
        <View style={styles.container}>
            <Text>nsjkqdbgkbqksdg
                dsqgqsdgqsd
                gqsdg
                qsgqsdg
                qsdgsqd
                gqsdgq
                sdg
            </Text>
            <Button title={"Game"} onPress={() => navigation.navigate('Play')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});