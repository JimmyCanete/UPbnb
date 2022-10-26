import './App.css';
import './components/navigation/navigation.js'
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/navigation/navigation";

function App() {
  return <BrowserRouter>
    <div className="App">

      <Navigation/>
    </div>
  </BrowserRouter>;
}

export default App;
