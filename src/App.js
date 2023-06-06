import React from 'react'
import {NavLink,BrowserRouter} from 'react-router-dom'
import GetRoutes  from './router/index'
import './css/tabbar.css'
export default function App() {
  return (
    <div>
      <h1>我是顶级组件</h1>
       <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : '')}>home</NavLink>
      <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>about</NavLink>
      
      <GetRoutes></GetRoutes>
     
       
    </div>
  )
}
