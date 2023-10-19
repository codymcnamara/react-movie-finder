interface ListItemProps {
    subHeading: string,
    content: string
}
const MovieListItem:React.FC<ListItemProps> = ({subHeading, content}) => {

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            <div className="fw-bold">{subHeading}</div>
                {content}
            </div>
        </li>
    )
}

export default MovieListItem;