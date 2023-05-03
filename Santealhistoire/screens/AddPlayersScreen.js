import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function AddPlayerScreen ({ navigation }) {
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
    <Button title={"Game"} onPress={() => navigation.navigate('Play')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  enterButton: {
    backgroundColor: '#009900',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f7f7f7',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  playerName: {
    fontSize: 16,
  },
  removeButton: {
    color: 'red',
  },
});