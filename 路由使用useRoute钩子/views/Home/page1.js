import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Page1() {
  return (
    <div>page1
      <NavLink to='/home/page1/other1'>other1</NavLink>
      <NavLink to='/home/page1/other2'>other2</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
