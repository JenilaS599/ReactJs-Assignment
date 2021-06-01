import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './pages/Users';
import Posts from './pages/Posts';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/users' exact component={Users} />
        <Route path='/posts' exact component={Posts} />
      </Switch>
      </Router>
    </>
  );
}
export default App;
