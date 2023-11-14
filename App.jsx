/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import SafeAreaView from 'react-native';
import ToDoList from './ToDoList';
import TodoForm from './ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog'
  ]);
  return (
    <SafeAreaView style = {style.container}>
      <ToDoList tasks = {tasks} />
      <TodoForm />
    </SafeAreaView>
  );
};

export default App;