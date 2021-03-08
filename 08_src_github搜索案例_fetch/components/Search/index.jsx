import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search = async (keyWord) => {
    PubSub.publish('getSearchData', { isFirst: false, isLoading: true })
    //#region 发送网络请求-----使用axios
    /*axios.get(`/api/search/users?q=${keyWord}`)
      .then(res => {
        PubSub.publish('getSearchData', { isLoading: false, users: res.data.items })
      }, err => {
        PubSub.publish('getSearchData', { isLoading: false, err: err.message })
      })*/
    //#endregion

    //#region 发送网络请求-----使用fetch发送（未优化）
    // fetch(`/api/search/users2?q=${keyWord}`).then(
    //   response => {
    //     console.log('服务器链接成功');
    //     return response.json()
    //   },
    //   error => {
    //     console.log('服务器链接失败', error);
    //     return new Promise(() => {})
    //   }
    // ).then(
    //   response => { console.log('获取数据成功：', response) },
    //   error => { console.log('获取数据失败：', error) }
    // )
    //#endregion

    //#region 发送网络请求-----使用fetch发送（优化）
    // fetch(`/api/search/users2?q=${keyWord}`)
    //   .then( response => { console.log('服务器链接成功'); return response.json() })
    //   .then( response => { console.log('获取数据成功：', response) })
    //   .catch( error => { console.log('获取数据失败：', error) })
    //#endregion

    // 发送网络请求-----使用fetch发送（最终优化） 
    try{
      const response = await fetch(`/api/search/users2?q=${keyWord}`)
      const data = await response.json();
      PubSub.publish('getSearchData', { isLoading: false, users: data.items })
    } catch (error) {
      PubSub.publish('getSearchData', { isLoading: false, err: error.message })
    }
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
