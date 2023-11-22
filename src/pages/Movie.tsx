import { useLoaderData } from 'react-router-dom';
import MovieDetail from '../interfaces/MovieDetail'
import MovieListItem from '../components/MovieListItem';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

type LoaderParams = {
    id: string
}

const movieDetailQuery = (movieId: string) =>{
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


export const loader = (queryClient) => {
    return (
        async ({ params }: {params: LoaderParams}) => {
            const { id } = params;
            await queryClient.ensureQueryData(movieDetailQuery(id));
            return id
        }
    )
}

const Movie = ()=> {
    const id = useLoaderData();
    const {data: movie} = useQuery(movieDetailQuery(id));

    const baseUrl = 'https://image.tmdb.org/t/p/original';
    const imgPath: string = movie.poster_path ? movie.poster_path : movie.backdrop_path;
    const listItemData: object[] = [
        {subHeading: 'Tagline', content: movie.tagline},
        {subHeading: 'Genres', content: movie.genres.map( (genre) => genre.name ).join(', ')},
        {subHeading: 'Overview', content: movie.overview},
        {subHeading: 'Release Date', content: movie.release_date},
        {subHeading: 'Budget', content: `$${movie.budget.toLocaleString()}`},
        {subHeading: 'Revenue', content: `$${movie.revenue.toLocaleString()}`},
        {subHeading: 'Runtime', content: `${movie.runtime} minutes`},
        {subHeading: 'Vote Average', content: movie.vote_average},
        {subHeading: 'Vote Count', content: movie.vote_count.toLocaleString()},
        {subHeading: 'Popularity', content: movie.popularity},
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
                            return <MovieListItem {...item} key={uuidv4()}/>
                        })}
                    </ul> 
                </div>
            </div>
            
        </>
    )
}
export default Movie;