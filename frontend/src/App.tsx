import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import ItemViews from './pages/ItemView';
import Header from './components/Header';
import Greeting from './pages/Greeting';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import ViewCategory from './pages/ViewCategory';
import AddCategory from './pages/AddCategory';

const App: React.FC = () => {
  return(
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route path="/items" component={ItemViews}/>
        <Route path="/categories" component={ViewCategory}/>
        <Route path="/addcategory" component={AddCategory}/>
        <Route path="/greeting" component={Greeting}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/additem" component={AddItem}/>
        <Route path="/" component={Home} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
