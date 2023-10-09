import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Movie,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>
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
