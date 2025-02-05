import React, { useState } from "react"; // Correctly import useState
import Moviecard from "../components/moviecards";

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // Correct useState
    const movies = [
        { id: 1, title: "Bahubali", release: '2018' },
        { id: 2, title: "Bahubali 2", release: '2022' },
        { id: 3, title: "KGF", release: '2022' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // You can filter the movies based on the search query here
        // For now, it resets the search query
        setSearchQuery(""); 
    }
    const filteredMovies = movies.filter(movie =>
                    movie.title.toLowerCase().startsWith(searchQuery)&&(
                    <Moviecard movie={movie} key={movie.id} />

                    ));

    

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-name">
                <input
                    type="text"
                    placeholder="Search for movies.."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="Submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {filteredMovies.map((movie) => (
                    <Moviecard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
