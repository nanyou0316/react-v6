import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
import '../../css/tabbar.css'
export default function Home() {
  return (
    <div>
      Home
      <div>
        <NavLink to="/home/page1" className={({ isActive }) => (isActive ? 'active' : '')}>page1</NavLink>
        <NavLink to="/home/page2" className={({ isActive }) => (isActive ? 'active' : '')}>page2</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  )
}
