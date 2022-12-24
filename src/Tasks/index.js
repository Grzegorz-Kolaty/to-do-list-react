import React from 'react';
import "./style.css"

const Tasks = ({ tasks, tasksHidingSwitch }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__tasks
          ${task.done && tasksHidingSwitch
            ? "list__tasks--hidden"
            : ""}`}>

        <button className={`list__checkButton ${task.done
          ? "list__checkButton--true"
          : ""}`}>
          ✔ </button>

        <span className={`list__item ${task.done
          ? " list__item--done"
          : ""}`}>
          {task.content} </span>

        <button className={`list__removeButton`}>🗑</button>

      </li>
    ))}
  </ul>
);

export default Tasks;