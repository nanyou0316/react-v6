import React from 'react'
import {useRoutes,NavLink} from 'react-router-dom'
import routes  from './router/index'
export default function App() {
 const outlut=  useRoutes(routes)
  return (
    <div>
      <h1>我是顶级组件</h1>
       <NavLink to='/home'>home</NavLink>
      <NavLink to='/about'>about</NavLink>
        {outlut}
    </div>
  )
}
