import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button className={`list__button`}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
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