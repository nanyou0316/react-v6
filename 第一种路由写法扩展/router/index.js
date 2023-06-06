import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import About from '../views/About'
import Home from '../views/Home/Home'
import App from '../App'
import Page1 from '../views/Home/page1'
import Page2 from '../views/Home/page2'
// import TabBar from './components/tabbar'
function Redirect({ to }) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to, { replace: true })
  })
  return null
}
function AutoComponent(props) {
  if (localStorage.getItem('token')) {
    return props.children
  } else {
    return <Redirect to="/login"></Redirect>
  }
}
export default function RouterRoot() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route path="/about" element={<About></About>}>
            
          </Route>
          <Route path="/home" element={<Home></Home>}>
            <Route path="/home/page1" element={<Page1></Page1>}>
            
            </Route>
            <Route path="/home/page2" element={<Page2></Page2>}>
            
            </Route>
            <Route path="/home" element={<Redirect to="/home/page1"></Redirect>}></Route>
          </Route>
          
          <Route index element={<Redirect to="home"></Redirect>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}
