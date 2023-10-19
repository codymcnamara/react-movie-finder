import { useLoaderData } from 'react-router-dom';
import MovieDetail from '../interfaces/MovieDetail'
interface LoaderData {
    id: string;
    movie: MovieDetail;
  }
  
const Movie = ()=> {
    const { id, movie }: {id: string, movie: MovieDetail} = useLoaderData() as LoaderData;

    return (
        <h1>{movie.title}</h1>
    )
}
export default Movie;