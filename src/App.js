import Container from "./Container";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <Container>
      <p>Licznik: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </Container>
  );
}

export default App;