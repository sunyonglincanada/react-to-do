import React from 'react';

const task = (props) => {
  return (
    <li className="list-item">
      <span>{props.task.title}</span>
      <div>
        <button className="btn-delete task-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
      <button className="btn-edit task-btn">
        <i className="fas fa-pen"></i>
      </button>
    </li>
  );
};

export default task;
