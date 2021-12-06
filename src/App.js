import Nav from "./components/Nav";
import Grid from "./components/Grid";
import Editor from "./compositions/Editor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getActions } from "./helpers/Actions";

function App() {
    let buttons = getActions().map(({title, icon, link}) => 
        <a href={link} className="btn">{title} <i className="material-icons right">{icon}</i></a>
      );

    return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/remote" element={<Grid items={buttons}/>} />
            <Route path="/editor" element={<Editor/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
