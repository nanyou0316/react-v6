import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import './css/tabbar.css'
export default function App() {
  return (
    <div>
      
      <p>我是顶级组件</p>
      <div>
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>about</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  )
}
