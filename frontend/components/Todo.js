import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { complete, info } = this.props
    console.log(info)
    return (
      <div className='todo'>
        <h3
          onClick={evt => complete(info.id)}
          style = {{ textDecoration: info.completed ? 'line-through' : '' }}
        >
          {info.name}
        </h3>
      </div>
    )
  }
}
