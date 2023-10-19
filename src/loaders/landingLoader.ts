import axios from "axios";

export const loader = async ()=> {
    const initialQuery = 'https://api.themoviedb.org/3/search/movie?query=zoolander&api_key=7b148caa8720b72c9e6ddf7882939bdc'
    const response = await axios.get(initialQuery);
    const data = response.data;
    console.log(data);
    return data.results;
}