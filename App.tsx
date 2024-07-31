import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './src/components/header/Header';
import Alltodos from './src/components/allTodos/Alltodos';
import CreateTodoBtn from './src/components/CreateTodoBtn/CreateTodoBtn';


const App = () => {
  
  return (
    <SafeAreaView style={styles.app}>
      <Header />
      <Alltodos />
      <CreateTodoBtn />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    minHeight: '100%',
    position: 'relative'
  }
});