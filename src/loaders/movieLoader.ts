import axios from 'axios'
import MovieDetail from '../interfaces/MovieDetail'

type LoaderParams = {
    id: string
}

export const loader = async ({ params }: {params: LoaderParams}) => {
    const { id } = params
    const detailPath: string = `https://api.themoviedb.org/3/movie/${id}?api_key=7b148caa8720b72c9e6ddf7882939bdc`;

    const response = await axios.get(detailPath);
    const data: MovieDetail = response.data;
    console.log(data);

    return data;
}