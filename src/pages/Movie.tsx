import { useLoaderData } from 'react-router-dom';

const Movie = ()=> {
    const {id, movie} = useLoaderData();

    return (
        <h1>{movie.title}</h1>
    )
}
export default Movie;