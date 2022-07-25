import { Link } from 'react-router-dom';

function Head(props) {

  return (
    <>
      <nav>
          <div className="nav-wrapper cyan lighten-2">
           <a href="/" className="brand-logo center">{props.title}</a>
            <Link to="/info" className="right extra-padding">
              <i href="/info" className="material-icons">info</i>
            </Link>
          </div>
      </nav>
    </>
  );
}

export default Head;
