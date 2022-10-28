import './App.css';
import './components/navigation/navigation.js'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Reservations from "./components/reservations/reservations"
import Houses from "./components/houses/houses"
import Details from './components/details/details'

function App() {
  return <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/house/:houseId" component={Details}/>
        <Route path="/home" component={Reservations}/>
        <Route path="/search" component={Houses}/>
      </Switch>
      <Navigation/>
    </div>
  </BrowserRouter>;
}

export default App;
