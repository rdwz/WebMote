import Remote from "./compositions/Remote";
import { readActionsFromStore } from "./helpers/Actions";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editor from "./compositions/Editor";

function App() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const fetchActions = async () =>{
      let newActions = await readActionsFromStore();
      if(!newActions) {newActions = []}; 
      setActions(newActions);
    }
    fetchActions();
  }, []);


  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Remote actions={actions}/>} />
          <Route path="/editor" element={<Editor actions={actions} setActions={setActions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
