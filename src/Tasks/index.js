import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__tasks
          ${task.done && hideDone
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

        <button
          className={`list__removeButton`}
          onClick={() => removeTask(task.id)}
        >🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;