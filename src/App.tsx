import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <h2>Movie Finder Home page</h2>
  },
  {
    path: '/about',
    element: (
      <div><h2>Movie Finder About Page</h2></div>
    )
  }
]);
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
