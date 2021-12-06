import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <div className="nav-wrapper cyan lighten-2">
        <a href="#" className="brand-logo">WebMote</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/remote">Remote</Link></li>
            <li><Link to="/editor">Editor</Link></li>
        </ul>
        </div>
    </nav>
  );
}

export default Nav;
