import { useLoaderData } from 'react-router-dom';
import MovieDetail from '../interfaces/MovieDetail'
import MovieListItem from '../components/MovieListItem';
  
const Movie = ()=> {
    const movie = useLoaderData() as MovieDetail;
    const baseUrl = 'https://image.tmdb.org/t/p/original';
    const imgPath: string = movie.poster_path ? movie.poster_path : movie.backdrop_path;

    return (
        <>
            <h1>{movie.title}</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <img src={baseUrl + imgPath} className="img-fluid rounded" alt="poster image" />
                </div>
                <div className="col">
                    <ul className="list-group">
                        <MovieListItem {...{subHeading: 'Tagline', content: movie.tagline}}/>
                        <MovieListItem {...{subHeading: 'Genres', content: movie.genres.map( (genre) => genre.name ).join(', ')}}/>
                        <MovieListItem {...{subHeading: 'Overview', content: movie.overview}}/>
                    </ul> 
                </div>
            </div>
            
        </>
    )
}
export default Movie;