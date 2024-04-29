import { useEffect, useState } from "react";
import HeaderTop from "../HeaderTop";
import { useGetMoviesTopQuery } from "../../redux/services/movies";
import { useNavigate } from "react-router-dom";
import { Movies } from "../../types/moviesTypes";
import "../Styles/ListStyles.scss";
import { RootState, getMovies } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination";
import Loading from "../Loading";

const TopMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetMoviesTopQuery(page);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(data?.results as Movies[]));
  }, [data, dispatch]);

  const movies = useSelector((state: RootState) => state.movies.result);

  const handleOnClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  const handlePageChange = (up: boolean) => {
    if (up) {
      setPage(page + 1);
    } else {
      page > 1 && setPage(page - 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <HeaderTop />
          <div className="grid-container">
            {movies &&
              movies.map((movie, index) => (
                <div key={movie.id} className="card">
                  <div
                    className="image-overlay"
                    style={{
                      backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`,
                    }}
                  >
                    <div className="card-content">
                      <div>
                      <h2 className="title">{movie.title}</h2>
                      <p>
                        {new Date(movie.release_date).toLocaleDateString(
                          "es-AR",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                      </div>
                      <p className="overview">{movie.overview}</p>
                    </div>
                    <div className="ranking-content">
                      <div className="ranking">
                        {movie.vote_average.toFixed(2)}
                      </div>
                      <button
                        className="details-button"
                        onClick={() => handleOnClick(movie.id)}
                      >
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Pagination handlePageChange={handlePageChange} page={page} />
        </div>
      )}
    </>
  );
};

export default TopMovies;
