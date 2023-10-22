import { Form } from "react-router-dom";

const SearchForm = () => {
    return (
        <Form action="">
            <input type="text" name="search" />
            <button type="submit" >Search</button>
        </Form>
    )
}

export default SearchForm;