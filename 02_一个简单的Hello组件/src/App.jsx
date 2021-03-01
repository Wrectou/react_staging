// 创建“外壳”组件App，里面包含着所有组件
import React, { Component } from 'react'      // 此处{}不是解构，是引入分别暴露 export xxx 的东西（不是默认暴露 export default xxx）
import Hello from './components/Hello'
import Welcome from './components/Welcome'

export default class App extends Component {
  render() {
    return(
      <div>
        <Welcome/>
        <Hello/>
      </div>
    )
  }
}