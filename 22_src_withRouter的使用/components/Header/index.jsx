import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {

  go = () => {
    this.props.history.go(-2)
  }

  goBack = () => {
    this.props.history.goBack()
  }

  goForward = () => {
    this.props.history.goForward()
  }

  render() {
    // console.log('Header: ',this.props);
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.go}>go</button>
        &emsp;<button onClick={this.goBack}>goBack</button>
        &emsp;<button onClick={this.goForward}>goForward</button>
      </div>
    )
  }
}

export default withRouter(Header)

// withRouter可以加工一般组件，让一般组件具备路由组件所特有的api
// withRouter的返回值是一个新的组件（含有props.history）