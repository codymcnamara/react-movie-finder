import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";

const Landing = ()=> {
    return(
        <div>
            <SearchForm/>
            <MovieList/>
        </div>
    )
}
export default Landing;