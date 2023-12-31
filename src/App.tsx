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
import { loader as landingLoader } from './components/MovieList';

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
    path: 'react-movie-finder/',
    element: <HomeLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Landing/>,
        loader: landingLoader(queryClient)
      },
      {
        path: 'movie/:id',
        element: <Movie/>
      },
      {
        path: 'about',
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
