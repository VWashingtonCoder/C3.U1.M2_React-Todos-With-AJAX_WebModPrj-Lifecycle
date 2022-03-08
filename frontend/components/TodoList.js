import React from 'react';
import Todo from './Todo';
import Form from './Form';

export default class TodoList extends React.Component {
  render() {
    const { clear, complete, onChange, onSubmit, success, todos, values } = this.props
    return (
      <div className='todo-list'>
        {success}
        {todos.map (todo => {
          return (
            <Todo
              key={todo.id}
              info={todo}
              complete={complete}
            />
          )
        })}
        <Form 
          values={values}
          onSubmit={onSubmit}
          onChange={onChange}
          clear={clear}
        />
      </div>
    )
  }
}
