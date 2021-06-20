import logo from "./logo.svg";
import "./App.css";
import BookList from "./Book/BookList";
import ToDoApp from "./ToDo/index";

function handleClick() {
  console.info("click click!!!");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="pink">Pink in APP</div>
        <BookList />
        <div onClick={handleClick}>click</div>
        <ToDoApp/>
      </header>
    </div>
  );
}

export default App;
