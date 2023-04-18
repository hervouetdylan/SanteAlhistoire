import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddPlayerScreen = () => {
  const [playerName, setPlayerName] = useState('');
  const [playersList, setPlayersList] = useState([]);

  const handleAddPlayer = () => {
    if (playerName.trim() !== '') {
      setPlayersList([...playersList, playerName]);
      setPlayerName('');
    }
  };

  const handleRemovePlayer = (playerIndex) => {
    const updatedPlayersList = [...playersList];
    updatedPlayersList.splice(playerIndex, 1);
    setPlayersList(updatedPlayersList);
  };

  const handleStartGame = () => {
    navigation.navigate('Play', { playersName });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter player name"
        value={playerName}
        onChangeText={setPlayerName}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddPlayer}>
        <Text style={styles.buttonText}>Add player</Text>
      </TouchableOpacity>
      {playersList.map((player, index) => (
        <View key={index} style={styles.playerContainer}>
          <Text style={styles.playerName}>{player}</Text>
          <TouchableOpacity onPress={() => handleRemovePlayer(index)}>
            <Text style={styles.removeButton}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleStartGame}>
        <Text style={styles.buttonText}>Entrer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  playersList: {
    marginBottom: 20,
  },
  playerName: {
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});