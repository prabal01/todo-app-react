import './App.css';
import React, { Component } from 'react';
import Todo from "./components/todo"



class App extends Component {
  state = {
    todo: "",
    todos: []
  }
  // inputField binding
  changeHandler = event => {
    this.setState({ todo: event.target.value })
  }

  // deleteTodo
  deleteTodo = (index) => {
    console.log(index)
    let newList = [...this.state.todos]
    newList = newList.slice(0, index).concat(newList.slice(index + 1))
    this.setState({
      todos: newList
    })

  }

  addTodoButton = event => {
    if (this.state.todo) {
      const newList = [...this.state.todos]
      newList.push(this.state.todo)
      this.setState({ todos: newList })
      console.log(this.state.todos)
    }
  }
  // add todo if enter key is pressed
  ifEnter = (event) => {
    if (event.keyCode === 13) {
      if (this.state.todo) {
        const newList = [...this.state.todos]
        newList.push(this.state.todo)
        this.setState({ todos: newList })
        console.log(this.state.todos)
      };
    }
  };
  restListHandler = () => {
    this.setState({ todos: [] })
  }

  // render function
  render() {
    return (
      <div>
        <div className="header"><h1>My ToDo</h1></div>

        <button className="reset-btn" onClick={this.restListHandler}>Reset List</button>
        <div className="appBody">
          <input placeholder="Press Enter to Add" type="text" onChange={this.changeHandler} onKeyDown={this.ifEnter} value={this.state.todo} />
          <button className="add-button" onClick={this.addTodoButton} >Add Todo</button><br />
          {this.state.todos.map((task,index) => <Todo
            task={task} 
            // udhar bhi atsk  
            index={index}
            key={task}
            deleteTodo={this.deleteTodo}
          />

          )}
        </div>
      </div>
    );
  }

}

export default App;
