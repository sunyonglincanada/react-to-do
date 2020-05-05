import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = (props) => {
  const taskHandlers = useContext(TaskListContext);

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskHandlers.editTaskItem) {
      taskHandlers.addTaskHandler(title);
      //setTitle('');
    } else {
      taskHandlers.editTaskHandler(title, taskHandlers.editTaskItem.id);
    }
  };

  useEffect(() => {
    if (taskHandlers.editTaskItem) {
      setTitle(taskHandlers.editTaskItem.title);
    } else {
      setTitle('');
    }
  }, [taskHandlers.editTaskItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {taskHandlers.editTaskItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button
          className="btn clear-btn"
          onClick={taskHandlers.clearTaskHandler}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
