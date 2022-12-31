import "./style.css";

const Buttons = ({ tasks, tasksHidingSwitch }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button className={`list__button`}>
          {tasksHidingSwitch ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className={`list__button`}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;