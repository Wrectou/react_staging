import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {


  static propTypes = {      // 对接收的props进行类型和必要性的限制
    addTodo: PropTypes.func.isRequired,
  }

  handleKeyUp = (e) => {      // 键盘事件的回调
    const { addTodo } = this.props
    const { keyCode, target } = e
    if (keyCode !== 13) return
    if (target.value.trim() === '') return alert('不能输入空任务名称！')
    const todoObj = {id: nanoid(), name: target.value, done: false}
    addTodo(todoObj)    // 将新添加的todoObj传递给App父级
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
