import './App.css'
import './bootstrap.scss';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  ErrorPage,
  Movie,
} from './pages';
import { loader as landingLoader } from './components/MovieList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Landing/>,
        loader: landingLoader
      },
      {
        path: '/movie',
        element: <Movie/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  },
  
]);
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
