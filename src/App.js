import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import SearchTask from './components/SearchTask';

import reducer from './store';
const store = createStore(reducer);

function App() {
  return (
    <Provider store = {store}>
      <div style={{paddingLeft: 500, paddingRight: 500}}>
        <h1>Tasks list</h1>
        <SearchTask></SearchTask>
        <TasksList></TasksList>
        <AddTask></AddTask>
      </div>
    </Provider>
  );
}

export default App;