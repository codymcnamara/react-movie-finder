import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";

const Landing = ()=> {
    return(
        <div>
            <h1>Landing</h1>
            <SearchForm/>
            <MovieList/>
        </div>
    )
}
export default Landing;