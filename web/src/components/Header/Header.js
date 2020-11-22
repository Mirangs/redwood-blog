import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const Header = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <header>
      <h1>
        <Link to={routes.home()}>Redwood blog</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
          <li>
            <Link to={routes.contact()}>Contact Us</Link>
          </li>
          {isAuthenticated && <li>{currentUser.email}</li>}
          <li>
            <button onClick={isAuthenticated ? logOut : logIn}>
              {isAuthenticated ? 'Log Out' : 'Log In'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
