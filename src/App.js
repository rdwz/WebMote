import Nav from "./components/Nav";
import Remote from "./components/Remote";

function App() {
    let buttons = [
      <button className="waves-effect btn">button</button>,
      <button className="waves-effect btn">button</button>,
      <button className="waves-effect btn">button</button>,
      <button className="waves-effect btn">button</button>,
      <button className="waves-effect btn">button</button>,
    ];
    return (
      <div className="App">
        <Nav />
        <Remote items={buttons}/>
      </div>
  );
}

export default App;
