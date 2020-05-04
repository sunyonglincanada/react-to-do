import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = (props) => {
  const removeTask = useContext(TaskListContext);

  return (
    <li className="list-item">
      <span>{props.task.title}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask.removeTaskHandler(props.task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <button className="btn-edit task-btn">
        <i className="fas fa-pen"></i>
      </button>
    </li>
  );
};

export default Task;
