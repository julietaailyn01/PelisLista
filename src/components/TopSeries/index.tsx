import { useEffect, useState } from "react";
import HeaderTop from "../HeaderTop";
import { useGetSeriesTopQuery } from "../../redux/services/series";
import { useNavigate } from "react-router-dom";
import { Series } from "../../types/seriesTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState, getSeries } from "../../redux/store";
import Pagination from "../Pagination";
import Loading from "../Loading";

const TopSeries = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetSeriesTopQuery(page);

  useEffect(() => {
    dispatch(getSeries(data?.results as Series[]));
  }, [data, dispatch]);

  const handleOnClick = (id: number) => {
    navigate(`/serie/${id}`);
  };

  const series = useSelector((state: RootState) => state.series.series);

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
            {series &&
              series.map((serie, index) => (
                <div key={serie.id} className="card">
                  <div
                    className="image-overlay"
                    style={{
                      backgroundImage: `url('https://image.tmdb.org/t/p/w500/${serie.poster_path}')`,
                    }}
                  >
                    <div className="card-content">
                      <h2 className="title">{serie.name}</h2>
                      <p className="overview">{serie.overview}</p>
                    </div>
                    <div className="ranking-content">
                      <div className="ranking">
                        {serie.vote_average.toFixed(2)}
                      </div>
                      <button
                        className="details-button"
                        onClick={() => handleOnClick(serie.id)}
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

export default TopSeries;
