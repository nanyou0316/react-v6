import React, { useEffect, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'

const Film = lazy(() => import('./views/Film'))
const Cinema = lazy(() => import('./views/Cinema'))
const Center = lazy(() => import('./views/Center'))
const NotFound = lazy(() => import('./views/NotFound'))
const NowPlaying = lazy(() => import('./views/films/NowPlaying'))
const ComingSoon = lazy(() => import('./views/films/ComingSoon'))
const Detail = lazy(() => import('./views/Detail'))
const Login = lazy(() => import('./views/Login'))
const TabBar = lazy(() => import('./components/tabbar'))
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
export default function App() {
  return (
    <div>
      <Suspense fallback={<>加载中...........</>}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Film></Film>}></Route> */}
            {/* <Route index element={<Film></Film>}></Route> */}
            <Route path="/film" element={<Film></Film>}>
              <Route
                path="nowplaying"
                element={<NowPlaying></NowPlaying>}
              ></Route>
              <Route
                path="comingsoon"
                element={<ComingSoon></ComingSoon>}
              ></Route>

              <Route
                index
                element={<Redirect to="nowplaying"></Redirect>}
              ></Route>
            </Route>
            <Route path="/cinema" element={<Cinema></Cinema>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="/center"
              element={
                // localStorage.getItem('token') ? (
                //   <Center />
                // ) : (
                //   <Redirect to="/login"></Redirect>
                // )
                // 不会像V5一样render再更新 render={()=>{}}
                <AutoComponent>
                  <Center></Center>
                </AutoComponent>
              }
            ></Route>
            {/* <Route path="/detail" element={<Detail></Detail>}></Route> */}
            <Route path="/detail/:id" element={<Detail></Detail>}></Route>
            <Route path="/" element={<Redirect to="/film"></Redirect>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            {/*重定向*/}
          </Routes>
          <TabBar></TabBar>
        </Router>
      </Suspense>
    </div>
  )
}
