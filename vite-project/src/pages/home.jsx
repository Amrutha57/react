import { searchMovies, getPopularMovies } from "../sevices/api";
import { useState, useEffect } from "react";
import Moviecard from "../components/moviecards";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
    
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search movies...");
        } finally {
            setLoading(false);
        }
    };
    // Filter the movies based on the search query
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


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
                <button type="submit" className="search-btn">
                    Search
                </button>
            </form>

            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}

            <div className="movies-grid">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <Moviecard movie={movie} key={movie.id} />
                    ))
                ) : (
                    <div className="no-results">No movies found</div>
                )}
            </div>
        </div>
    );
}

export default Home;
