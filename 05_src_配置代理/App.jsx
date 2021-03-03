import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component{

  getStudentsData = () => {
    axios.get('http://localhost:3000/api1/students')
      .then(res => {
        console.log('成功了：',res.data);
      }, err => {
        console.log('失败了：',err);
      })
  }

  getcarsData = () => {
    axios.get('http://localhost:3000/api2/cars')
      .then(res => {
        console.log('成功了：',res.data);
      }, err => {
        console.log('失败了：',err);
      })
  }

  render() {
    return(
      <div>
        <button onClick={this.getStudentsData}>获取学生数据</button>
        <button onClick={this.getcarsData}>获取汽车数据</button>
      </div>
    )
  }
}