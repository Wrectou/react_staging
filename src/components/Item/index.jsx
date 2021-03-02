import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = { 
    move: false,      // 鼠标移入移出状态
  }

  handleMouse = (flag) => {     // 鼠标移入移出回调
    return () => {
      this.setState({ move: flag })
    }
  }

  handleCheck = (id) => {     // 完成 / 没完成某一项todo的回调
    return (e) => {
      this.props.updateTodo(id, e.target.checked)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { move } = this.state
    return (
      <li style={{backgroundColor: move ? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display: move ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}
