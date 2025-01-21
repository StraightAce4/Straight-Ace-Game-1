import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

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
        <Text style={styles.progressText}>
          Here you can see your daily task
        </Text>
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
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#D3D3D3',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#B0C4DE',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#B0C4DE',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#D3D3D3',
    fontSize: 16,
  },
  altButton: {
    backgroundColor: '#2F4F4F',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  altButtonText: {
    color: '#D3D3D3',
    fontSize: 16,
  },
  terms: {
    fontSize: 12,
    color: '#B0C4DE',
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
  },
  homeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
    width: '100%',
  },
  greeting: {
    fontSize: 24,
    color: '#D3D3D3',
    marginBottom: 20,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  activeTab: {
    fontSize: 16,
    color: '#1E90FF',
  },
  inactiveTab: {
    fontSize: 16,
    color: '#B0C4DE',
  },
  progressContainer: {
    marginBottom: 20,
    width: '100%',
  },
  progressTitle: {
    fontSize: 18,
    color: '#D3D3D3',
    marginBottom: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#B0C4DE',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#2F4F4F',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    width: '76%',
    height: '100%',
    backgroundColor: '#1E90FF',
    borderRadius: 5,
  },
  progressPercentage: {
    fontSize: 14,
    color: '#D3D3D3',
    marginTop: 5,
    textAlign: 'center',
  },
  categoriesTitle: {
    fontSize: 18,
    color: '#D3D3D3',
    marginBottom: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  categoryBox: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    minWidth: '40%',
    maxWidth: '45%',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 16,
    color: '#D3D3D3',
    marginBottom: 5,
    textAlign: 'center',
  },
  categoryTasks: {
    fontSize: 14,
    color: '#D3D3D3',
    marginBottom: 5,
    textAlign: 'center',
  },
  categoryDate: {
    fontSize: 12,
    color: '#B0C4DE',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#2F4F4F',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#D3D3D3',
    fontSize: 16,
  },
});
