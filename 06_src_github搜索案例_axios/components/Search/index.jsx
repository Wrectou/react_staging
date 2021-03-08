import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = (keyWord) => {
    this.props.updateAppState({ isFirst: false, isLoading: true })
    // axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`)
    axios.get(`/api/search/users?q=${keyWord}`)
      .then(res => {
        this.props.updateAppState({ isLoading: false, users: res.data.items })
      }, err => {
        this.props.updateAppState({ isLoading: false, err: err.message })
      })
  }

  buttonSearch = () => {
    const { keyWordElement: { value: keyWord } } = this
    this.search(keyWord)
  }

  enterSearch = (e) => {
    const { keyCode, target } = e
    if (keyCode !== 13) return
    if (target.value.trim() === '') return alert('请输入名称再搜索！')
    this.search(target.value)
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索 Github 用户</h3>
        <div>
          <input onKeyUp={this.enterSearch} ref={e => this.keyWordElement = e} type="text" placeholder="请输入关键词" />&nbsp;
          <button onClick={this.buttonSearch}>搜索</button>
        </div>
      </section>
    )
  }
}
