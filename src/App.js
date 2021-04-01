import './App.css';
import Missions from './Missions';
import Profil from './component/Profil';
import Nav from './Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./component/Home"



function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Switch>
          <Route path= "/" exact component ={Profil} />
          <Route path= "/Missions" exact component ={Missions} />
          <Route path= "/" component = {() => <h1 style={{textAlign:'center', marginTop: 200,}}>Cette page n'a pas encore été développée</h1>} />
        </Switch>
        <Nav position='fixed' bottom='0' />
      </Router>
    </div>
  );
}

export default App;
