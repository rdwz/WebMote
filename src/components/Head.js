
function Head(props) {

  return (
    <>
      <nav>
          <div className="nav-wrapper cyan lighten-2">
           <a href="/" className="brand-logo center">{props.title}</a>
           <div className="right extra-padding">
             <a href="/info" className="material-icons">info</a>
           </div>
          </div>
      </nav>
    </>
  );
}

export default Head;
