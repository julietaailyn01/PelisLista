import PacmanLoader from "react-spinners/PacmanLoader";
import logo from "../../assets/logo-p.png";
import '../Styles/Loading.scss'
const Loading = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="logo" className="logo-p" />
      <PacmanLoader />
    </div>
  );
};

export default Loading;
