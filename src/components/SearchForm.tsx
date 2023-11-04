import { Form } from "react-router-dom";

const SearchForm = () => {
    return (
        <div className="form-wrapper">
            <Form action="" className="mb-5 search-form">
                <label for="search" class="form-label">Search for your favorite movie</label>
                <input type="text" name="search" id="search" className="form-control mb-3" />
                <button type="submit" className="btn btn-primary mb-3 " >Search</button>
            </Form>
        </div>
    )
}

export default SearchForm;