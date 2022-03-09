import React from 'react';
import Todo from './Todo';
import Form from './Form';

export default class TodoList extends React.Component {
  render() {
    const { clear, complete, completed, onChange, onSubmit, success, todos, values } = this.props
    return (
      <div className='todo-list'>
        {success}
        {todos.reduce ((acc, todo) => {
          if( completed || !todo.completed) return acc.concat(
          <Todo key={todo.id} info={todo} complete={complete}/>
          )
          return acc
          }, [])
        }
        <Form 
          values={values}
          completed={completed}
          onSubmit={onSubmit}
          onChange={onChange}
          clear={clear}
        />
      </div>
    )
  }
}
