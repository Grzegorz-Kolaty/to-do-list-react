import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "") addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <input
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                className="form__input"
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};

export default Form;