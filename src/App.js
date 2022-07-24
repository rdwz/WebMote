import Head from "./components/Head";
import Remote from "./compositions/Remote";
import { readActionsFromStore } from "./helpers/Actions";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editor from "./compositions/Editor";
import InfoPage from "./compositions/InfoPage";

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
        <Head title="WebMote" />
        <Routes>
          <Route path="/" exact element={<Remote actions={actions}/>} />
          <Route path="/editor" element={<Editor actions={actions} setActions={setActions} />} />
          <Route path="/info" element={<InfoPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
