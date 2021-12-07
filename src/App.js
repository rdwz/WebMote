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

  const setSingleAction = (index, action) => {
    let newActions = actions;
    newActions.splice(index, 1, action);
    setActions(newActions);
  }

  let buttons = actions.map((action) => <ActionButton key={action.id} action={action} />);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/remote" element={<Grid items={buttons} />} />
          <Route path="/editor" element={<Editor actions={actions} setSingleAction={setSingleAction} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
