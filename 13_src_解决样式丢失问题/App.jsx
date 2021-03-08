import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './pages/About'   // About是路由组件
import Home from './pages/Home'   // Home是路由组件
import Header from './components/Header'    // Header是一般组件
import MyNavLink from './components/MyNavLink'    // Header是一般组件
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}

              {/* 在react中依靠 路由链接 实现 切换组件  ----   编写路由链接 */}
              {/* <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName="atguigu" className=""list-group-item" to="/home">Home</NavLink> */}
              <MyNavLink to="/atguigu/about" a="a" b="b" c="c">About</MyNavLink>
              <MyNavLink to="/atguigu/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  <Route path="/atguigu/about" component={About} />
                  <Route path="/atguigu/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
