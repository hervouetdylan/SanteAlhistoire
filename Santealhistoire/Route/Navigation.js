import React from "react";
import { View, Text } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/stack';
import { AddPlayerScreen } from "./../screens/AddPlayersScreen";
import { PlayScreen } from "./../screens/PlayScreen";


const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home"  component={AddPlayerScreen} />
                <Stack.Screen name="Play" component={PlayScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
