import './App.css';
import NavBar from './Navbar';
import Register from './register';
import Login from './login'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


    

function App() {
  return (
    <Router>
   <NavBar/>
   <Switch>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/Navbar' component={NavBar}/>
               
    </Switch>
   </Router>
  );
}

export default App;
