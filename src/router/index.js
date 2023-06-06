import Home from '../views/Home/Home'
import Page1 from '../views/Home/page1'
import Page2 from '../views/Home/page2'
import Other1 from '../views/Other/Other1'
import Other2 from '../views/Other/Other2'
import About from '../views/About'
import { Navigate , useRoutes} from 'react-router-dom'
const routesArr=[
  {
    path:'/',
    element:< Navigate to='/home' />
  },
  {
    path:'/home',
    element:<Home />,
    // element:< Navigate to='/home/page1' />,
    children:[
      {
        path:'/home/page1',
        element:<Page1 />,
        // element:< Navigate to='/home/page1/other1' />,
        children:[
          {
            path:'/home/page1/other1',
            element:<Other1 />,
          },
          {
            path:'/home/page1/other2',
            element:<Other2 />,
          },
          {
            path:'/home/page1',
            element:< Navigate to='/home/page1/other2' />,
          }
        ]
      },
      {
        path:'/home/page2',
        element:<Page2 />,
      },
      {
        path:'/home',
        element:< Navigate to='/home/page1' />,
      }
    ]
  },
  {
    path:'/about',
    element:<About />
  },
]
// export default routes



const GetRoutes = () => {
  const routes = useRoutes(routesArr);
  return (routes)
}


export default GetRoutes
