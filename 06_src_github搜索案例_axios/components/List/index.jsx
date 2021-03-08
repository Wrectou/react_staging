import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { isFirst, isLoading, err, users } = this.props

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
