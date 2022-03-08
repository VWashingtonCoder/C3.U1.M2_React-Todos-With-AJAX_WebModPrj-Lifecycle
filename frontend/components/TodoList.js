import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { complete, success, todos } = this.props
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
      </div>
    )
  }
}
