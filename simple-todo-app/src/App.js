import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  addTodo(event){
    event.preventDefault(); //stops from reloading page
    let name = this.refs.name.value;  //get the value from ref=name
    let completed = this.refs.completed.value;  //get the value from ref=completed
    let counter = this.state.counter;

    let todo = {
      name,
      completed,
      counter   //mapping name to let name and completed to completed
    };

    let todos = this.state.todos; //get the initial empty todos array

    todos.push(todo); //pushes array

    counter += 1; //increases counter number before new state
    
    this.setState({   //set state will change the initial state
      todos: todos,    //changes empty todos[] with pushed todo
      counter: counter  //changes counter number from pushed todo
    });

    this.refs.todoform.reset();
  }


  removeTodo(index){
    let todos = this.state.todos;

    let todo = todos.findIndex(function(todo){
      return todo.counter === index //didn't understand this one
    });

    todos.splice(todo, 1);

    this.setState({
      todos: todos
    });
  }

  details(index){
    let todos = this.state.todos

    let todo = todos.findIndex(function(todo){
      return todo.counter === index //didn't understand this one
    });

    console.log("You clicked on the");
    console.log(todo);
  }

  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this); //bind with addTodo method in main component
    this.removeTodo = this.removeTodo.bind(this)//bind with removeTodo method in main component
    this.details = this.details.bind(this)//bind with removeTodo method in main component
    this.state = {    //initial state
      todos: [],      //setting initial todos as an emptry array
      title: 'React simple todo application',   //setting initial title as ....
      counter: 0    //setting counter 0 for key
    };
  }

  render() {
    let title = this.state.title;   //gets the value from initial state title
    let todos = this.state.todos;   //gets the value from inital state todos next will get from setState which is in addTodo method
    return (
      <div className = 'App'>
        <h1> {title}</h1>
        <form ref = 'todoform'>
          <input type='text' ref = 'name' placeholder = "What do you want to do?"/>
          <input type='text' ref = 'completed' placeholder = "Is it done yet?"/>
          <button onClick={this.addTodo}> Add todo </button> 
        </form>
        <ul>
          {todos.map((todo => 
                <li key = {todo.counter}>
                  {todo.name} <button onClick={this.removeTodo.bind(null, todo.counter)}> Delete </button> <button onClick={this.details.bind(null, todo.counter)}>View Details</button>
                </li>
            ))}
        </ul>
      </div>
    );
    //there, title is called from let title, is onClick here props?, //having problem in mapping
  }
}

export default App;
