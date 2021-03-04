import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search = (keyWord) => {
    PubSub.publish('getSearchData', { isFirst: false, isLoading: true })
    axios.get(`/api/search/users?q=${keyWord}`)
      .then(res => {
        PubSub.publish('getSearchData', { isLoading: false, users: res.data.items })
      }, err => {
        PubSub.publish('getSearchData', { isLoading: false, err: err.message })
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
