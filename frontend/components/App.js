import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';

const URL = 'http://localhost:9000/api/todos'

const initialState = {
  successMessage: '',
  errorMessage: '',
  todos: [],
  form: {
    nameInput: "",
    completed: false,
  },
  completedTodos: true, 
}
export default class App extends React.Component {
  state = initialState;

  componentDidMount(){
    this.getTodos()
  }
  getTodos = () => {
    axios.get(URL)
    .then(res=>{
      this.setState({
        ...this.state, 
        todos: res.data.data,
        successMessage: res.data.message,
      })
    })
    .catch(err => {
      this.setState({
        ...this.state,
        errorMessage: err,
      })
    })
  }
  addTodo = () => {
    const newTodo = {
      name: this.state.form.nameInput,
      completed: false,
    }
    axios.post(URL, newTodo)
    .then(res => {
      this.setState({
        ...this.state,
        todos: [ ...this.state.todos, res.data.data ],
        successMessage: res.data.message, 
        form: initialState.form,
      })
    })
    .catch(err => {
      this.setState({ ...this.state, errorMessage: err.response.data.message })
    })
  }
  completeTodo = id => {
    axios.patch(`${URL}/${id}`)
    .then( res => {
      console.log(res)
      this.setState({
        ...this.state,
        todos: this.state.todos.map(todo => {
          return todo.id === id ? res.data.data : todo
        }),
        successMessage: res.data.message,
      })
    })
    .catch(err => {
      this.setState({
        ...this.state,
        errorMessage: err
      })
    })
  }
  changeInput = (key, value) =>{
    this.setState({
      ...this.state,
      form: {...this.state.form, [key]: value}
    })
  }
  /*functions in progress*/
  clearTodos = () => {
    this.setState({ ...this.state, completedTodos: !this.state.completedTodos })
  }
  
  render() {
    const { form, successMessage, todos, completedTodos } = this.state;

    return (
      <div className='App'>
        <TodoList 
          success={successMessage}
          todos={todos}
          values={form} 
          onSubmit={this.addTodo}
          onChange={this.changeInput}
          complete={this.completeTodo}
          clear={this.clearTodos} 
          completed={completedTodos}
        />
      </div>
    )
  }
}
