import Nav from "./components/Nav";
import Grid from "./components/Grid";
import ActionButton from "./compositions/ActionButton";
import { readActionsFromStore, writeActionsToStore } from "./helpers/Actions";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  const [actions, setActions] = useState([]);
  
  useEffect(() => {
    setActions(readActionsFromStore());
  }, []);

  useEffect(() => {
    writeActionsToStore(actions);
  }, [actions]);


  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/remote" element={<Grid items={buttons} />} />
          <Route path="/editor" element={<Grid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
