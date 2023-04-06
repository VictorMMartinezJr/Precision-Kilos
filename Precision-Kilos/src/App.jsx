import "./App.css";
import Barbell from "./components/Barbell/Barbell";
import Navbar from "./components/Navbar/Navbar";
import Plates from "./components/Plates/Plates";
import Weight from "./components/Weight/Weight";
import { WeightsProvider } from "./components/WeightsContext";

function App() {
  return (
    <WeightsProvider>
      <div className="App">
        <Navbar />
        <Barbell />
        <Weight />
        <Plates />
      </div>
    </WeightsProvider>
  );
}

export default App;
