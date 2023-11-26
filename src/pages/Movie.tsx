import { useParams } from 'react-router-dom';
import MovieDetail from '../interfaces/MovieDetail'
import MovieListItem from '../components/MovieListItem';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

interface ListItemProps {
    subHeading: string,
    content: string,
    key: string
}

const movieDetailQuery = (movieId: string | undefined) =>{
    return {
        queryKey: ['movie', movieId],
        queryFn: async () => {
            const detailPath: string = `https://api.themoviedb.org/3/movie/${movieId}?api_key=7b148caa8720b72c9e6ddf7882939bdc`;
        
            const response = await axios.get(detailPath);
            const data: MovieDetail = response.data;
            console.log(data);
        
            return data;
        }
    }
}

const Movie = ()=> {
    const { id } = useParams();
    const {data: movie} = useQuery(movieDetailQuery(id));

    if (!movie) { 
        console.log("'movie' is undefined")
        return (<>Sorry there's been an error</>);
    }
    const baseUrl = 'https://image.tmdb.org/t/p/original';
    const imgPath: string = movie.poster_path ? movie.poster_path : movie.backdrop_path;
    const listItemData: ListItemProps[] = [
        {subHeading: 'Tagline', content: movie.tagline, key: uuidv4()},
        {subHeading: 'Genres', content: movie.genres.map( (genre) => genre.name ).join(', '), key: uuidv4()},
        {subHeading: 'Overview', content: movie.overview, key: uuidv4()},
        {subHeading: 'Release Date', content: movie.release_date, key: uuidv4()},
        {subHeading: 'Budget', content: `$${movie.budget.toLocaleString()}`, key: uuidv4()},
        {subHeading: 'Revenue', content: `$${movie.revenue.toLocaleString()}`, key: uuidv4()},
        {subHeading: 'Runtime', content: `${movie.runtime} minutes`, key: uuidv4()},
        {subHeading: 'Vote Average', content: movie.vote_average.toString(), key: uuidv4()},
        {subHeading: 'Vote Count', content: movie.vote_count.toLocaleString(), key: uuidv4()},
        {subHeading: 'Popularity', content: movie.popularity.toString(), key: uuidv4()},
    ];

    return (
        <>
            <h1>{movie.title}</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <img src={baseUrl + imgPath} className="img-fluid rounded" alt="poster image" />
                </div>
                <div className="col">
                    <ul className="list-group">
                        {listItemData.map((item)=>{
                            return <MovieListItem {...item} />
                        })}
                    </ul> 
                </div>
            </div>
            
        </>
    )
}
export default Movie;