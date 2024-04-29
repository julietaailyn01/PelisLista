import { useParams } from "react-router-dom";
import "../Styles/Details.scss";
import { useGetSeriesByIdQuery } from "../../redux/services/series";
import Loading from "../Loading";

const SerieDetails = () => {
  const { id } = useParams();
  const { data: serie, isLoading } = useGetSeriesByIdQuery({ id: id || "" });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {serie && (
            <div className="detail-container">
              <img
                src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}
                alt={serie.original_title}
              />
              <div className="details-container">
                <div className="title-container">
                  <h1 className="title">{serie.name}</h1>
                  <p className="genres">
                    {serie.genres.map((genre, index) => (
                      <span key={index}>{genre.name}, </span>
                    ))}
                  </p>
                  <p className="ranking">{serie.vote_average.toFixed(2)}</p>
                </div>
                <div className="description-container">
                  <h2 className="title-description">Descripción</h2>
                  <p className="overview">{serie.overview}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default SerieDetails;
