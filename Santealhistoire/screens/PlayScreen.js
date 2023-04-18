import React from 'react';
import { View, Text } from 'react-native';

const PlayScreen = ({ route }) => {
  const { players } = route.params;
  
  return (
    <View>
      <Text>Joueurs :</Text>
      {players.map((player, index) => (
        <Text key={index}>{player}</Text>
      ))}
    </View>
  );
};

export default PlayScreen;