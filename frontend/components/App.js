import React from 'react';
import axios from 'axios';

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
      console.log(this.state.todos)
      console.log(this.state.successMessage)
    })
    .catch(err => {
      this.setState({
        ...this.state,
        errorMessage: err,
      })
    })
  }
  
  render() {
    return null
  }
}
