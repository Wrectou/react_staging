import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component{
  // 状态在哪里，操作状态的方法就在哪里！！！！！

  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '打豆豆', done: false},
    ],
  }

  addTodo = (todoObj) => {      // 用于添加一个新的todo对象
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  updateTodo = (id, done) => {      // 用于更新一个todo对象
    const { todos } = this.state
    // 处理id相匹配的数据 / 状态更改的数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = (id) => {      // 用于删除一个todo对象
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => todoObj.id !== id)
    this.setState({ todos: newTodos })
  }

  checkAllTodos = (done) => {     // 用于全选 / 反选
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => { 
      return {...todoObj, done}
    })
    this.setState({ todos: newTodos })    
  }

  clearAllDone = () => {    // 用于清除所有已完成的
    const { todos } = this.state
    const newTodos = todos.filter((todoObj) => !todoObj.done )
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return(
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} todos={todos} />
          <Footer checkAllTodos={this.checkAllTodos} clearAllDone={this.clearAllDone} todos={todos} />
        </div>
      </div>
    )
  }
}