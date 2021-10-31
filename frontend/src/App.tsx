import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import ItemViews from './pages/ItemView';
import MyHeader from './components/Header';
import Greeting from './pages/Greeting';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import ViewCategory from './pages/ViewCategory';
import AddCategory from './pages/AddCategory';
import Posts from './pages/Posts';
import Layout, { Content } from 'antd/lib/layout/layout';
import AddPost from './pages/AddPost';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return(
    <BrowserRouter>
    <Switch>
      <Layout>
        <img src="ghettokalashop.svg" alt="Website-logo"></img>
        <Route path="/" component={MyHeader}/>
              <Content>
                  <Route path="/items" component={ItemViews}/>
                  <Route path="/categories" component={ViewCategory}/>
                  <Route path="/addcategory" component={AddCategory}/>
                  <Route path="/greeting" component={Greeting}/>
                  <Route path="/cart" component={Cart}/>
                  <Route path="/additem" component={AddItem}/>
                  <Route path="/posts" component={Posts}/>
                  <Route path="/addpost" component={AddPost}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/register" component={Register}/>
                  <Route exact path="/" component={Home}/>
              </Content>
      </Layout>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
