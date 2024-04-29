import "../Styles/Headers.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-containter'>
        <Link to="/" className='link'>Peliculas</Link>
        <Link to="/series" className='link'>Series</Link>
    </div>
  )
}
export default Header