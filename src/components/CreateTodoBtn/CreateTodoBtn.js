import { View, Text, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import CreateTodoBtnStyle from './CreateTodoBtnStyle';
import AddTodoModal from '../../modal/AddTodoModal';

const CreateTodoBtn = () => {
    const [addTodoModal, setAddTodoModal]=useState(false);
    return (
        <View style={CreateTodoBtnStyle.btnContainer}>
            <Modal
                transparent={true}
                animationType='fade'
                visible={addTodoModal}
            >
                <AddTodoModal addTodoModal={addTodoModal} setAddTodoModal={setAddTodoModal} />
            </Modal>
            <TouchableOpacity style={CreateTodoBtnStyle.addBtn} onPress={()=>setAddTodoModal(true)}>
                <Text style={CreateTodoBtnStyle.btnText}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CreateTodoBtn;