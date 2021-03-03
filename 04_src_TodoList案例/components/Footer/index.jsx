import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleCheckAll = (e) => {     // 全选的回调
    this.props.checkAllTodos(e.target.checked)
  }

  handleClearAllDone = () => {     // 清除所有完成的回调
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre, todoObj) => pre + (todoObj.done ? 1 : 0), 0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
