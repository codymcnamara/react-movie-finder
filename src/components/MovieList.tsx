import axios from "axios";
import Movie from '../movie';
import { useLoaderData } from "react-router-dom";

export const loader = async ()=> {
    let initialQuery = 'https://api.themoviedb.org/3/search/movie?query=zoolander&api_key=7b148caa8720b72c9e6ddf7882939bdc'
    const response = await axios.get(initialQuery);
    const data = response.data;
    // console.log(data);
    return data.results;
}

const MovieList = () => {
    const movieData = useLoaderData() as Movie[];
    const baseUrl = 'https://image.tmdb.org/t/p/w500/';

    const movieDivs: JSX.Element[] = movieData.map((movie: Movie)=>{
        return (
            <div className="col">
                <div className="card" key={movie.id}>
                    <img src={baseUrl + movie.backdrop_path}className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.overview}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
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