import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {
    isFirst: true,
    isLoading: false,
    err: '',
    users: [],
  }

  componentDidMount() {
    this.token = PubSub.subscribe('getSearchData', (_, data) => {
      this.setState(data)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { isFirst, isLoading, err, users } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h3>欢迎使用，请输入关键字再搜索。</h3> :
          isLoading ? <h2>Loading...</h2> :
          err ? <h3 style={{ color: 'red' }}>{err}</h3> :
          users.map((user) => {
            return(
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img src={user.avatar_url} style={{width: "100px"}} alt="avatar"/>
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
