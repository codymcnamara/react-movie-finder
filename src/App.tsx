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
import { loader as landingLoader } from './loaders/landingLoader'
import { loader as movieLoader } from './loaders/movieLoader'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
