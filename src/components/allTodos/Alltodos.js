import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import AlltodosStyle from './AlltodosStyle';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos, deleteTodo } from '../../redux/slices/todoSlice';

const Alltodos = () => {
  const dispatch = useDispatch();
  let todos = useSelector(store => store.todos); // Access todos directly from Redux store

  // Fetch all todos from AsyncStorage
  const fetchTodos = async () => {
    try {
      const allTodos = await AsyncStorage.getItem('_alltodos');
      if (allTodos !== null) {
        dispatch(setTodos(JSON.parse(allTodos)));
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Delete a todo
  const deleteOneTodo = async (index) => {
    try {
      const allTodos = await AsyncStorage.getItem('_alltodos');
      const todosArray = allTodos ? JSON.parse(allTodos) : [];
      todosArray.splice(index, 1);
      await AsyncStorage.setItem('_alltodos', JSON.stringify(todosArray));
      dispatch(deleteTodo(index));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Toggle todo status
  const toggleTodoStatus = async (index) => {
    try {
      const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, status: !todo.status } : todo
      );
      await AsyncStorage.setItem('_alltodos', JSON.stringify(updatedTodos));
      dispatch(setTodos(updatedTodos));
      
    } catch (error) {
      console.error('Error toggling todo status:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

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
          onPress: () => deleteOneTodo(index)
        }
      ]
    );
  };

  return (
    <View style={AlltodosStyle.container}>
      <Text style={AlltodosStyle.header}>All Todos</Text>

      <View style={AlltodosStyle.listContainer}>
        {todos && todos.length > 0 ? (
          <FlatList
            data={todos}
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
