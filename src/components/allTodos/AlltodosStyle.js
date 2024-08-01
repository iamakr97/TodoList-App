// AlltodosStyle.js
import { StyleSheet } from 'react-native';

const AlltodosStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 72,
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ff8856',
  },
  listContainer: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    elevation: 2,
  },
  todoContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  todoTextContainer: {
    flex: 1,
    marginLeft: 8,
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  todoDescription: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  editButton: {
    backgroundColor: '#ff8856',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noTodosText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  statusCheckbox: {
    backgroundColor: 'transparent',
    
  }
});

export default AlltodosStyle;
