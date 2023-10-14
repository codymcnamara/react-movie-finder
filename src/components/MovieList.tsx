import { useEffect, useState } from "react"
import axios from "axios";
import Movie from '../movie';

const MovieList = () => {
    const [movies, setMovies ] = useState<Movie[]>([]);

    let fetchFirstData = async ()=> {
        let initialQuery = 'https://api.themoviedb.org/3/search/movie?query=zoolander&api_key=7b148caa8720b72c9e6ddf7882939bdc'

        try {
            const response = await axios.get(initialQuery);
            const data = response.data;
            setMovies(data.results);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(()=>{
        fetchFirstData();
    }, [])

    const movieDivs: JSX.Element[] = movies.map((movie: Movie)=>{
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