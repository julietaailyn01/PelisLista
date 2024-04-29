import { useParams } from "react-router-dom";
import { useGetMoviesByIdQuery } from "../../redux/services/movies";
import "../Styles/Details.scss";
import Loading from "../Loading";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMoviesByIdQuery({ id: id || "" });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {movie && (
            <div className="detail-container">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
              />
              <div className="details-container">
                <div className="title-container">
                  <h1 className="title">{movie.title}</h1>
                  <p className="genres">
                    {movie.genres.map((genre, index) => (
                      <span key={index}>{genre.name}, </span>
                    ))}
                  </p>
                  <p className="ranking">{movie.vote_average.toFixed(2)}</p>
                </div>
                <div className="description-container">
                  <h2 className="title-description">Descripción</h2>
                  <p className="overview">{movie.overview}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default MovieDetails;
