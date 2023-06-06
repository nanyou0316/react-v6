import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      Home,
      <NavLink to='/home/page1'>page1</NavLink>
      <NavLink to='/home/page2'>page2</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
