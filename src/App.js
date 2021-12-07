import Nav from "./components/Nav";
import Remote from "./compositions/Remote";
import { readActionsFromStore, writeActionsToStore } from "./helpers/Actions";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editor from "./compositions/Editor";

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
          <Route path="/remote" element={<Remote actions={actions}/>} />
          <Route path="/editor" element={<Editor actions={actions} setActions={setActions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
