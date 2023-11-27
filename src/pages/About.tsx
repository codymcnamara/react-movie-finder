const About = ()=> {
    return (
        <>
            <h1 className="about-title">About</h1>
            <p>This site is built with React, TypeScript, and React Query.</p>
            <p>Coding highlights:</p>
            <ul>
                <li>Uses temporary caching of API responses with React Query, resulting in a faster UI.</li>
                <li>Connects to external TMDB API service to provide up to date movie information.</li>
                <li>Uses React Router "loader" to fetch data before component renders.</li>
            </ul>
        </>
    )
}
export default About;