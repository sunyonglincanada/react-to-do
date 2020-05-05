import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialState);

  const [editTaskItem, setEditTaskItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Methods
  // Add Task
  const addTask = (taskTitle) => {
    setTasks([...tasks, { title: taskTitle, id: uuidv4() }]);
  };
  // Remove Task
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear Task
  const clearTask = () => {
    setTasks([]);
  };

  // Edit Task
  const findTask = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditTaskItem(item);
  };

  const editTask = (title, id) => {
    const newTask = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTask);
    setEditTaskItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        allTasks: tasks,
        addTaskHandler: addTask,
        removeTaskHandler: removeTask,
        clearTaskHandler: clearTask,
        findTaskHandler: findTask,
        editTaskHandler: editTask,
        editTaskItem: editTaskItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
