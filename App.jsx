/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import SafeAreaView from 'react-native';
import ToDoList from './ToDoList';
import TodoForm from './ToDoForm';

const App = () => {
  return (
    <SafeAreaView>
      <ToDoList />
      <TodoForm />
    </SafeAreaView>
  );
};

export default App;