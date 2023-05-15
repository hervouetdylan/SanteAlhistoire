import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function usePlayersList() {
  const [playersList, setPlayersList] = useState([]);

  const addPlayer = (playerName) => {
    if (playerName.trim() !== '') {
      setPlayersList([...playersList, playerName]);
    }
    console.log('liste des ajoutés', playerName)
  };

  const removePlayer = (playerIndex) => {
    const updatedPlayersList = playersList.filter((_, index) => index !== playerIndex);
    setPlayersList(updatedPlayersList);
  };
  console .log('liste des joueurs', playersList)
  AsyncStorage.setItem(
    'player',
    JSON.stringify(playersList),
  )
  return {
    playersList,
    addPlayer,
    removePlayer,
  };
}
