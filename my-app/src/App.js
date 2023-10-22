import './App.css';
import NavBar from './Navbar';
import Register from './register';
import Login from './login';

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';


    

function App() {
  return (
    <div className="bg-img">
    <Router>
   <NavBar/>
  
   <Switch>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/' component={NavBar}/>
               
    </Switch>
   
   </Router>

    </div>
    
  );
}

export default App;
