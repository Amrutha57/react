function Moviecard({movie}){
    function onclicked(){
        alert('clicked')
    }
    return  <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onclicked}>
                🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release}</p>
        </div>
    </div>
}
export default Moviecard