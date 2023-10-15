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

    const movieDivs: JSX.Element[] = movieData.map((movie: Movie)=>{
        return (
            <div key={movie.id}>
                <h4>{movie.title}</h4>
            </div>
        )
    })

    return (
        <div>
            {movieDivs}
        </div>
    )
}

export default MovieList;