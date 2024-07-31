import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Alltodos = () => {
  const [allTodo, setAllTodo] = useState([]);
  const [name, setName] = useState('');

  const storeData = async () => {
    try {
      const existingTodos = await AsyncStorage.getItem('username');
      const todos = existingTodos ? JSON.parse(existingTodos) : [];
      todos.push(name);

      await AsyncStorage.setItem('username', JSON.stringify(todos));

     
      setAllTodo(todos);
      setName(''); 
    } catch (e) {
      
      console.error(e);
    }
  };

  async function fetchTodos() {
    try {
      const todo = await AsyncStorage.getItem('username');
      if (todo !== null) {
        setAllTodo(JSON.parse(todo));
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <View>
      <Text>All Todos</Text>
      <TextInput
        placeholder='Enter your name'
        value={name}
        style={{ borderWidth: 1, borderColor: 'black', margin: 8 }}
        onChangeText={(text) => setName(text)}
      />
      <Button title='Submit' onPress={storeData} />
      <View>
        {allTodo && allTodo.length > 0 ? (
          allTodo.map((todo, index) => (
            <Text key={index}>{todo}</Text>
          ))
        ) : (
          <Text>There are NO todos</Text>
        )}
      </View>
    </View>
  );
};

export default Alltodos;
