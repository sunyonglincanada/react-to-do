import React from 'react';

import TaskList from './components/TaskList';
import TaskListContextProvider from './context/TaskListContext';
import './App.css';

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
