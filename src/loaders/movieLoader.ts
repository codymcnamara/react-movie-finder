import axios from 'axios'

type LoaderParams = {
    id: string
}

export const loader = async ({ params }: {params: LoaderParams}) => {
    const { id } = params
    const detailPath: string = `https://api.themoviedb.org/3/movie/${id}?api_key=7b148caa8720b72c9e6ddf7882939bdc`;

    const response = await axios.get(detailPath);
    const data = response.data;
    console.log(data);

    return {id, movie: data};
}