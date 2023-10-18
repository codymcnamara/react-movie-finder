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
import { loader as movieLoader } from './pages/Movie'
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
        path: '/movie/:id',
        element: <Movie/>,
        loader: movieLoader
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
