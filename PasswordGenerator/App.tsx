import {Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Form from './components/Form';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.headingText}>Password Generator</Text>
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default App;
