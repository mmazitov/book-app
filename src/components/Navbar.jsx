import '../App.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className='home-link'>
        <h1>React books app</h1>
      </Link>
      <div>
        <Link to="/favorites" className='favorite-link'>
          <h3>
            Your favorites  
          </h3>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
