import Movie from '../interfaces/movie';
import { NavLink, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Request = {
    url: string
}

const searchMovieQuery = (searchTerm) => {
    return {
        queryKey: ['search', searchTerm || 'popular' ],
        queryFn: async () => {
            const popularMovieQuery = 'https://api.themoviedb.org/3/discover/movie?api_key=7b148caa8720b72c9e6ddf7882939bdc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
            const movieSearchQuery = `https://api.themoviedb.org/3/search/movie?api_key=7b148caa8720b72c9e6ddf7882939bdc&query=`;
            const initialQuery = searchTerm === null ? popularMovieQuery : movieSearchQuery + searchTerm;
            const response = await axios.get(initialQuery);
            const data = response.data;
            console.log(data);

            return data.results;
        }
    }  
}

export const loader = (queryClient)=> 
    async ({request}: {request: Request})=> {
        const url = new URL(request.url);
        const searchTerm = url.searchParams.get('search');

        await queryClient.ensureQueryData(searchMovieQuery(searchTerm));
        return searchTerm
    } 

const MovieList = () => {
    const searchTerm = useLoaderData();
    const {data: movieData} = useQuery(searchMovieQuery(searchTerm));
    const baseUrl = 'https://image.tmdb.org/t/p/w500/';

    const movieDivs: JSX.Element[] = movieData.map((movie: Movie)=>{
        const imgPath: string = movie.backdrop_path ? movie.backdrop_path : movie.poster_path;

        return (
            <div className="col" key={movie.id}>
                <div className="card" >
                    <img src={baseUrl + imgPath}className="card-img-top wide-aspect-ratio" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.overview}</p>
                        <NavLink to={`movie/${movie.id}`} className="btn btn-primary">See Movie Details</NavLink>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {movieDivs}
        </div>
    )
}

export default MovieList;