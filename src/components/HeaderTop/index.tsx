import { Link } from 'react-router-dom'
import '../Styles/Headers.scss'

const HeaderTop = () => {
  return (
    <div className='header-containter'>
        <Link to="/top/movies" className='link'>Mejores peliculas</Link>
        <Link to="/top/series" className='link'>Mejores series</Link>
    </div>
  )
}

export default HeaderTop