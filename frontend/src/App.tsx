import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import ItemViews from './pages/ItemView';
import NavBar from './components/NavBar';
import Greeting from './pages/Greeting';

const App: React.FC = () => {
  return(
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route path="/items" component={ItemViews}/>
        <Route path="/greeting" component={Greeting}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
