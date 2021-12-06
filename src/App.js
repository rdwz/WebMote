import Nav from "./components/Nav";
import Remote from "./components/Remote";
import { getActions } from "./helpers/Actions";

function App() {
    let buttons = getActions().map(({title, icon, link}) => 
        <a href={link} className="btn">{title} <i className="material-icons right">{icon}</i></a>
      );

    return (
      <div className="App">
        <Nav />
        <Remote items={buttons}/>
      </div>
  );
}

export default App;
