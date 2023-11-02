import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
import appStyles from './src/assets/styles/app.styles';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <View style={appStyles.subContainer}>
        <StatusBar backgroundColor={appStyles.statusBar.color} />
        <ScrollView contentContainerStyle={appStyles.scroll}>
          <Home />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;
