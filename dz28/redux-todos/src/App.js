import './App.css';
import List from "./components/List";
import Form from "./components/Form";

function App() {

  return (
      <div className="container">
          <h1 className="todo-title">To Do List</h1>
          <List />
          <Form />
      </div>
  );
}

export default App;
