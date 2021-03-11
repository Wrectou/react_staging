import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

  state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'},
    ]
  }

  pushShow = (id, title) => {
    // push跳转
    // this.props.history.push(`/home/message/detail/`)

    // push跳转,携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    // push跳转,携带search参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

    // push跳转,携带state参数
    // this.props.history.push({pathname:'/home/message/detail', state:{id, title}})
    this.props.history.push('/home/message/detail', {id, title})
  }

  replaceShow = (id, title) => {
    // replace跳转
    // this.props.history.replace(`/home/message/detail/`)

    // replace跳转,携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // replace跳转,携带search参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

    // replace跳转,携带state参数
    // this.props.history.replace({pathname:'/home/message/detail', state:{id, title}})
    this.props.history.replace('/home/message/detail', {id, title})
  }

  go = () => {
    this.props.history.go(2)
  }

  goBack = () => {
    this.props.history.goBack()
  }

  goForward = () => {
    this.props.history.goForward()
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((item) => {
              return(
                <li key={item.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                  {/* 向路由组件传递state参数 */}
                  <Link to={{pathname:'/home/message/detail', state:{id:item.id, title:item.title}}} >{item.title}</Link>

                  &emsp;<button onClick={() => {this.pushShow(item.id, item.title)}}>push</button>
                  &emsp;<button onClick={() => {this.replaceShow(item.id, item.title)}}>replace</button>

                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

        {/* search参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}

        {/* state参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}/>

        &emsp;<button onClick={this.go}>go</button>
        &emsp;<button onClick={this.goBack}>goBack</button>
        &emsp;<button onClick={this.goForward}>goForward</button>

      </div>
    )
  }
}
