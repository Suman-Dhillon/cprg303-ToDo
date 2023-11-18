/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './ToDoList';
import TodoForm from './ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView style = {styles.container}>
      <ToDoList tasks = {tasks} />
      <TodoForm addTask = {addTask}/>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
};

export default App;