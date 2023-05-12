import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import GestureFlipView from 'react-native-gesture-flip-card';
import axios from 'axios';

const App = () => {
  const [alcohol, setAlcohol] = useState({ name: '', date: '' });
  const [inputDate, setInputDate] = useState('');
  const [isDateCorrect, setIsDateCorrect] = useState(false);
  const flipViewRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.40/Santealhistoire/Back/GetAlcohol.php');
      const { name, date } = response.data;
      setAlcohol({ name, date });
      console.log(name, date);
    } catch (error) {
      console.log('Erreur lors de la récupération des données:', error);
    }
  };

  const onChangeDate = (text) => {
    setInputDate(text);
  };

  const checkDate = () => {
    if (inputDate === alcohol.date) {
      console.log('La date est correcte');
      setIsDateCorrect(true);
      flipViewRef.current.flip();
    } else {
      console.log('La date est incorrecte');
      setIsDateCorrect(false);
      flipViewRef.current.flip();
    }
  };

  const renderFront = (name) => {
    return (
      <View style={styles.frontStyle}>
        <Text style={{ fontSize: 25, color: '#fff' }}>En quelle date a été créée cette alcool : {name}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDate}
          placeholder='Mettez une date'
        />
        <TouchableOpacity style={styles.button} onPress={checkDate}>
          <Text style={styles.buttonText}>Vérifier</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBack = (date) => {
    console.log(date);
    return (
      <View style={styles.backStyle}>
        <Text style={{ fontSize: 25, color: '#fff' }}>
          {isDateCorrect ? 'La date est correcte' : 'La date est incorrecte'}
        </Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View ref={flipViewRef}>
          <GestureFlipView width={300} height={500}>
            {renderFront(alcohol.name)}
            {renderBack(alcohol.date)}
          </GestureFlipView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontStyle: {
    width: 300,
    height: 500,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  backStyle: {
    width: 300,
    height: 500,
    backgroundColor: '#f0f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth : 1,
  },
});

export default App;