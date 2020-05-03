import React from 'react';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskListContextProvider from './context/TaskListContext';
import './App.css';

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
