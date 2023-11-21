// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

// type Request = {
//     url: string
// }

// const searchMovieQuery = (searchTerm) => {
//     return {
//         queryKey: ['search', searchTerm || 'popular' ],
//         queryFn: async () => {
//             const popularMovieQuery = 'https://api.themoviedb.org/3/discover/movie?api_key=7b148caa8720b72c9e6ddf7882939bdc&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
//             const movieSearchQuery = `https://api.themoviedb.org/3/search/movie?api_key=7b148caa8720b72c9e6ddf7882939bdc&query=`;
//             const initialQuery = searchTerm === null ? popularMovieQuery : movieSearchQuery + query;
//             const response = await axios.get(initialQuery);
//             const data = response.data;
//             console.log(data);

//             return data.results;
//         }
//     }
        
// }

// export const loader = async ({request}: {request: Request})=> {
//     const url = new URL(request.url);
//     const searchTerm = url.searchParams.get('search');
//     const data = useQuery(searchMovieQuery(searchTerm));

//     return data
// }