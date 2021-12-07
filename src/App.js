import Nav from "./components/Nav";
import Grid from "./components/Grid";
import ActionButton from "./compositions/ActionButton";
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
          <Route path="/remote" element={
            <Grid>
              {
                actions.map((action) => <ActionButton key={action.id} action={action} />)
              }
            </Grid>
          } />
          <Route path="/editor" element={<Editor actions={actions} setActions={setActions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
