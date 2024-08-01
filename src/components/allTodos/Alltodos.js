import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox'; // Import Checkbox
import AlltodosStyle from './AlltodosStyle';

const Alltodos = ({ navigation }) => {
  const [allTodo, setAllTodo] = useState([]);

  // Fetch all todos from AsyncStorage
  const fetchTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem('_alltodos');
      if (todos !== null) {
        setAllTodo(JSON.parse(todos));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Delete a todo
  const deleteTodo = async (index) => {
    try {
      const todos = await AsyncStorage.getItem('_alltodos');
      const todosArray = todos ? JSON.parse(todos) : [];
      todosArray.splice(index, 1);
      await AsyncStorage.setItem('_alltodos', JSON.stringify(todosArray));
      setAllTodo(todosArray);
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle todo status
  const toggleTodoStatus = async (index) => {
    try {
      const updatedTodos = [...allTodo];
      updatedTodos[index].status = !updatedTodos[index].status;
      await AsyncStorage.setItem('_alltodos', JSON.stringify(updatedTodos));
      setAllTodo(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = (index) => {
    // Implement your edit handler
    navigation.navigate('EditTodo', { index });
  };

  const handleDelete = (index) => {
    Alert.alert(
      "Delete Todo",
      "Are you sure you want to delete this todo?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Delete", 
          onPress: () => deleteTodo(index) 
        }
      ]
    );
  };

  return (
    <View style={AlltodosStyle.container}>
      <Text style={AlltodosStyle.header}>All Todos</Text>
      
      <View style={AlltodosStyle.listContainer}>
        {allTodo && allTodo.length > 0 ? (
          <FlatList
            data={allTodo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={AlltodosStyle.todoItem}>
                <View style={AlltodosStyle.todoContent}>
                  <CheckBox
                    value={item.status}
                    onValueChange={() => toggleTodoStatus(index)}
                  />
                  <View style={AlltodosStyle.todoTextContainer}>
                    <Text style={AlltodosStyle.todoTitle}>{item.title}</Text>
                    <Text style={AlltodosStyle.todoDescription}>{item.description}</Text>
                  </View>
                </View>
                <View style={AlltodosStyle.buttonContainer}>
                  {/* <TouchableOpacity
                    style={AlltodosStyle.editButton}
                    onPress={() => handleEdit(index)}
                  >
                    <Text style={AlltodosStyle.buttonText}>Edit</Text>
                  </TouchableOpacity> */}
                  <TouchableOpacity
                    style={AlltodosStyle.deleteButton}
                    onPress={() => handleDelete(index)}
                  >
                    <Text style={AlltodosStyle.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        ) : (
          <Text style={AlltodosStyle.noTodosText}>There are NO todos</Text>
        )}
      </View>
    </View>
  );
};

export default Alltodos;
