import "./App.css";
import StartGame from "./components/StartGame";
import FourByFour from "./components/FourByFour";

function App() {
  return (
    <div className="App">
      <StartGame to="/" />
      <FourByFour to="/four-by-four" />
    </div>
  );
}

export default App;
