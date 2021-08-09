import './App.css';
import Addusers from './components/Addusers';
import Allusers from './components/Allusers';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import EditUser from './components/EditUser';
import Notfound from './components/Notfound';

function App() {
  return (
  <BrowserRouter>
   <Navbar></Navbar>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/all" component={Allusers}/>
   <Route exact path="/add-user" component={Addusers}/>
   <Route exact  path="/edit/:id" component = {EditUser}/>
   
   <Route  component={Notfound}/>
   </Switch>
   </BrowserRouter>

  );
}
export default App;
