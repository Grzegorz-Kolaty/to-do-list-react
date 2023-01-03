import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__tasks
          ${task.done && hideDone
            ? "list__tasks--hidden"
            : ""}`}>

        <button
          className={`list__checkButton ${task.done
            ? "list__checkButton--true"
            : ""}`}
          onClick={() => toggleTaskDone(task.id)}
        >✔</button>

        <span className={`list__item ${task.done
          ? " list__item--done"
          : ""}`}>
          {task.id}. {task.content}
        </span>

        <button
          className="list__removeButton"
          onClick={() => removeTask(task.id)}
        >🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;