import React, { Component } from 'react';
import './App.css';

import Task from './Components/Task/Task'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value : '',
      todo : [],
    }
  }

  addTodoHandler = (event) => {
    event.preventDefault();
    const currentState = { ...this.state }
    const currentTodo = currentState.todo.concat(currentState.value);
    this.setState({
      value : '',
      todo : currentTodo,
    })
  }

  addValueHandler = (event) => {
    this.setState({
      value : event.target.value,
    })
  }

  render() {

    let todoList = null;
    if(this.state.todo.length > 0) {
      todoList = this.state.todo.map((task) => {
        return <Task message={task} />
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          {todoList}
          <form onSubmit={(ev) => this.addTodoHandler(ev)}>
            <input type="text" value={this.state.value} onChange={(ev) => { this.addValueHandler(ev) }} />
            <input type="submit" value="Submit" />
          </form>
            
        </header>
      </div>
    );
  }
}

export default App;
