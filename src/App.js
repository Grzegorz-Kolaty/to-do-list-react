import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przejść na React", done: true },
  { id: 2, content: "zjesc obiad", done: false },
]

let tasksHidingSwitch = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań React" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} tasksHidingSwitch={tasksHidingSwitch} />}
        extraHeaderContent={<Buttons tasks={tasks} tasksHidingSwitch={tasksHidingSwitch} />}
      />
    </Container>
  )
}

export default App;