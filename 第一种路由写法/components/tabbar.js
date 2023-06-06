import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// Link的高亮效果没有NavLink方便
import './tabbar.css'
export default function tabbar() {
  return (
    <div>
      <ul>
        <li>
          {/* <NavLink to='/user' activeClassName={style.active}>用户</NavLink>  
              activeClassName添加类的写法被废弃了
          */}
          <NavLink
            to="/film"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            电影
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cinema"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            影院
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/center"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            我的
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
