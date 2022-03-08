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
  
  completeTodo = id => {
    axios.patch(`${url}/${id}`)
    .then( res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    const { errorMessage, form, successMessage, todos } = this.state;
    
    // console.log(`errorMessage: ${errorMessage}`)
    // console.log(`forminfo: ${form}`)
    // console.log(`successMessage: ${successMessage}`)
    // console.log(`todos: ${todos}`)
    
    return (
      <div className='App'>
        <TodoList todos={todos} success={successMessage} complete={this.completeTodo} />
      </div>
    )
  }
}
