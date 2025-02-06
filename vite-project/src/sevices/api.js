const API_KEY = "0de5748d5c4325e41ced08c4835950c6";
const BASE_URL = "https://api.themoviedb.org/3";

// Function to fetch popular movies
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch popular movies.");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error in getPopularMovies:", error);
    throw error;
  }
};

// Function to search movies by query
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch search results.");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error in searchMovies:", error);
    throw error;
  }
};
