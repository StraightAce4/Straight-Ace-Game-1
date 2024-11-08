import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [card, setCard] = useState(null);

  const cards = [
    'Ace of Spades',
    'Ace of Hearts',
    'Ace of Diamonds',
    'Ace of Clubs',
  ];

  const drawCard = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setCard(randomCard);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Straight Aces</Text>
      <TouchableOpacity style={styles.button} onPress={drawCard}>
        <Text style={styles.buttonText}>Draw a Card</Text>
      </TouchableOpacity>
      {card && <Text style={styles.card}>{card}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  card: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default App;
