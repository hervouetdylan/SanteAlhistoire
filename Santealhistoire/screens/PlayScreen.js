import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PiccoloGame() {
  const [question, setQuestion] = useState('');

  const questions = [
    'Imite un animal de la ferme',
    'Danse comme si personne ne te regardait',
    'Fais le bruit d une voiture qui démarre',
    'Mime ton sport préféré',
    'Raconte une blague',
    'Fais une grimace',
  ];

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <Button title="Nouvelle question" onPress={generateQuestion} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    color: 'white',
  }
});