import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {isSignedIn ? (
          <HomeScreen onSignOut={handleSignOut} />
        ) : (
          <SignInScreen onSignIn={handleSignIn} />
        )}
      </View>
    </SafeAreaView>
  );
}

function SignInScreen({ onSignIn }) {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>TASKMATES</Text>
      <Text style={styles.tagline}>ORGANIZE TASKS WITH EASE</Text>
      <Text style={styles.description}>The only productivity app you need</Text>
      <TouchableOpacity style={styles.button} onPress={onSignIn}>
        <Text style={styles.buttonText}>Sign in with Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.altButton}>
        <Text style={styles.altButtonText}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.altButton}>
        <Text style={styles.altButtonText}>Apple ID</Text>
      </TouchableOpacity>
      <Text style={styles.terms}>
        By Continuing you agree to the Terms and Conditions.
      </Text>
    </View>
  );
}

function HomeScreen({ onSignOut }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.greeting}>Hello Mr. Graham</Text>
      <View style={styles.tabContainer}>
        <Text style={styles.activeTab}>Overview</Text>
        <Text style={styles.inactiveTab}>Productivity</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.progressTitle}>Daily progress</Text>
        <Text style={styles.progressText}>Here you can see your daily task</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressPercentage}>76%</Text>
      </View>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesContainer}>
        <CategoryBox title="School" newTasks={5} date="9/24" color="#1E90FF" />
        <CategoryBox title="Home" newTasks={2} date="4/18" color="#008080" />
        <CategoryBox title="Work" newTasks={9} date="3/15" color="#6495ED" />
        <CategoryBox title="Urgent" newTasks={5} date="9/24" color="#FF4500" />
      </View>
      <TouchableOpacity style={styles.backButton} onPress={onSignOut}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function CategoryBox({ title, newTasks, date, color }) {
  return (
    <View style={[styles.categoryBox, { backgroundColor: color }]}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Text style={styles.categoryTasks}>{newTasks} New</Text>
      <Text style={styles.categoryDate}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  appName: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#D3D3D3',
    marginBottom: 12,
  },
  tagline: {
    fontSize: 19,
    color: '#B0C4DE',
    marginBottom: 22,
  },
  description: {
    fontSize: 17,
    color: "#B0C4DE",
    marginBottom: 22,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 18,
    borderRadius: 9,
    marginVertical: 12,
    width: '82%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#D3D3D3',
    fontSize: 17,
  },
  altButton: {
    backgroundColor: '#2F4F4F',
    padding: 18,
    borderRadius: 9,
    marginVertical: 7,
    width: '82%',
    alignItems: 'center',
  },
  altButtonText: {
    color: '#D3D3D3',
    fontSize: 17,
  },
  terms: {
    fontSize: 13,
    color: '#B0C4DE',
    marginTop: 22,
    width: '82%',
    textAlign: 'center',
  },
  homeContainer: {
    flex: 1,
    padding: 22,
    backgroundColor: '#000',
    width: '100%',
  },
  greeting: {
    fontSize: 25,
    color: '#D3D3D3',
    marginBottom: 22,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 22,
  },
  activeTab: {
    fontSize: 17,
    color: '#1E90FF',
  },
  inactiveTab: {
    fontSize: 17,
    color: '#B0C4DE',
  },
  progressContainer: {
    marginBottom: 22,
    width: '100%',
  },
  progressTitle: {
    fontSize: 19,
    color: '#D3D3D3',
    marginBottom: 7,
  },
  progressText: {
    fontSize: 15,
    color: '#B0C4DE',
    marginBottom: 12,
  },
  progressBar: {
    height: 11,
    backgroundColor: '#2F4F4F',
    borderRadius: 9,
    overflow: 'hidden',
  },
  progressFill: {
    width: '76%',
    height: '100%',
    backgroundColor: '#1E90FF',
    borderRadius: 9,
  },
  progressPercentage: {
    fontSize: 15,
    color: '#D3D3D3',
    marginTop: 7,
    textAlign: 'center',
  },
  categoriesTitle: {
    fontSize: 19,
    color: '#D3D3D3',
    marginBottom: 12,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  categoryBox: {
    flex: 1,
    padding: 12,
    margin: 7,
    borderRadius: 9,
    minWidth: '45%',
    maxWidth: '45%',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 17,
    color: '#D3D3D3',
    marginBottom: 7,
    textAlign: 'center',
  },
  categoryTasks: {
    fontSize: 15,
    color: '#D3D3D3',
    marginBottom: 7,
    textAlign: 'center',
  },
  categoryDate: {
    fontSize: 13,
    color: '#B0C4DE',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#2F4F4F',
    padding: 14,
    borderRadius: 9,
    marginVertical: 22,
    width: '100%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#D3D3D3',
    fontSize: 17,
  },
});
