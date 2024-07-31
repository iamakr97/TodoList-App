import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import CreateTodoBtnStyle from './CreateTodoBtnStyle';

const CreateTodoBtn = () => {
    return (
        <View style={CreateTodoBtnStyle.btnContainer}>
            <TouchableOpacity style={CreateTodoBtnStyle.addBtn}>
                <Text style={CreateTodoBtnStyle.btnText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CreateTodoBtn;