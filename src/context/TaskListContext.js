import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: 'Read the book', id: 1 },
    { title: 'Wash the car', id: 2 },
    { title: 'Write some code', id: 3 },
  ]);

  const [editTaskItem, setEditTaskItem] = useState(null);

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
