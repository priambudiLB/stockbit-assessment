
import { lazy } from 'react'
const Home = lazy(() => import('../pages/Home'))
const Detail = lazy(() => import('../pages/Detail'))

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    default: true
  },
  {
    path: '/:imdbID',
    component: Detail,
  }
]

export default routes
