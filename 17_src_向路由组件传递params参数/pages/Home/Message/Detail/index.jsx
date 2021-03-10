import React, { Component } from 'react'

const detailData = [
  {id: '01', content: '哈哈哈，消息一'},
  {id: '02', content: '这是消息二'},
  {id: '03', content: 'React Router Params'},
]

export default class Detail extends Component {
  render() {
    console.log(this)
    // 接收params参数
    const { id, title } = this.props.match.params
    const detail = detailData.find((item) => item.id === id)
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {detail.content}</li>
      </ul>
    )
  }
}
