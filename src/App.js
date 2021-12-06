import Nav from "./components/Nav";
import Remote from "./components/Remote";
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
            <Route path="/remote" element={<Remote items={buttons}/>} />
            <Route path="/editor" element={<Editor items={buttons}/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
