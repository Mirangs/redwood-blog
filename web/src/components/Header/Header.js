import { Link, routes } from '@redwoodjs/router'

const Header = () => {
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
        </ul>
      </nav>
    </header>
  )
}

export default Header
