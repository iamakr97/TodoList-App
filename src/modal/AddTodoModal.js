import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddTodoModalStyle from './AddTodoModalStyle';

const AddTodoModal = ({ addTodoModal, setAddTodoModal }) => {
  const [validTodo, setValidTodo] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    status: false
  });

  const handleTitleChange = (text) => {
    if (text !== '') {
      setValidTodo(false);
    }
    setNewTodo(prev => ({ ...prev, title: text }));
  };

  const handleDescriptionChange = (text) => {
    setNewTodo(prev => ({ ...prev, description: text }));
  };

  const addNewTodoHandler = async () => {
    if (newTodo.title.trim() === '') {
      setValidTodo(true);
      return;
    }

    try {
      const existingTodos = await AsyncStorage.getItem('_alltodos');
      const todosArray = existingTodos ? JSON.parse(existingTodos) : [];

      todosArray.push(newTodo);

      await AsyncStorage.setItem('_alltodos', JSON.stringify(todosArray));

      setNewTodo({
        title: '',
        description: '',
        status: false
      });

      setAddTodoModal(false);
    } catch (error) {
      Alert.alert('Error', 'There was an error adding the todo. Please try again.');
    }
  };

  const cancelTodoHandler = () => {
    setNewTodo({
      title: '',
      description: '',
      status: false
    });
    setAddTodoModal(false);
  };

  return (
    <View style={AddTodoModalStyle.modalContainer}>
      <View style={AddTodoModalStyle.modalBox}>
        <Text style={AddTodoModalStyle.headerText}>Add New Todo</Text>

        <Text style={AddTodoModalStyle.labelText}>Title</Text>
        {validTodo && (
          <Text style={AddTodoModalStyle.errorText}>Please Enter Title</Text>
        )}
        <TextInput
          style={AddTodoModalStyle.inputField}
          value={newTodo.title}
          onChangeText={handleTitleChange}
          placeholder="Enter title"
          placeholderTextColor="#aaa"
        />

        <Text style={AddTodoModalStyle.labelText}>Description</Text>
        <TextInput
          style={[AddTodoModalStyle.inputField, AddTodoModalStyle.descriptionField]}
          value={newTodo.description}
          onChangeText={handleDescriptionChange}
          placeholder="Enter description"
          placeholderTextColor="#aaa"
          multiline
        />

        <View style={AddTodoModalStyle.buttonContainer}>
          <TouchableOpacity style={AddTodoModalStyle.cancelButton} onPress={cancelTodoHandler}>
            <Text style={AddTodoModalStyle.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={AddTodoModalStyle.addButton} onPress={addNewTodoHandler}>
            <Text style={AddTodoModalStyle.buttonText}>Add Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddTodoModal;
