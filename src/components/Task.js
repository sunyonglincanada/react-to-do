import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const Task = (props) => {
  const taskHandler = useContext(TaskListContext);

  return (
    <li className="list-item">
      <span>{props.task.title}</span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => taskHandler.removeTaskHandler(props.task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <button
        className="btn-edit task-btn"
        onClick={() => taskHandler.findTaskHandler(props.task.id)}
      >
        <i className="fas fa-pen"></i>
      </button>
    </li>
  );
};

export default Task;
