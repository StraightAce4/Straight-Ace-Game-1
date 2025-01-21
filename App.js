import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>TASKMATES</Text>
      <Text style={styles.tagline}>ORGANIZE TASKS WITH EASE</Text>
      <Text style={styles.description}>The only productivity app you need</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in with Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.altButton}>
        <Text style={styles.altButtonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.altButton}>
        <Text style={styles.altButtonText}>Apple ID</Text>
      </TouchableOpacity>
      <Text style={styles.terms}>By Continuing you agree to the Terms and Conditions.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
  },
  appName: {
    fontSize: 50, // Much larger font size for app name
    fontWeight: 'bold',
    color: '#D3D3D3', // gray
    marginBottom: 0, 
  },
  tagline: {
    fontSize: 12, 
    color: '#fff', 
    marginBottom: 40, 
  },
  description: {
    fontSize: 20, 
    color: '#fff', // White
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  altButton: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  altButtonText: {
    color: '#000',
    fontSize: 16,
  },
  terms: {
    fontSize: 12,
    color: '#888',
    marginTop: 20,
  },
});
