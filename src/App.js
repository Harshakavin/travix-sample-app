import logo from './travix-logo_white.webp';
import './App.css';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import FlightComponent from './components/FlightComponent';
import SignInComponent from './components/SignInComponent';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from './actions';

function App() {
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.loggedUser);
  console.log(user);

  const signOutUser = () =>{
    dispatch(signOut());
  }

  return (
    <Router>
     <div className="App">
      <div className="gradient-background"></div>
      <header className="App-header">
        <Link to='/'><img src={logo} className="App-logo" alt="logo"></img></Link>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Jobs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Blogs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Press</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">People</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        { user.isLogged ?  <div className="user-section nav-link">
                  <a> 
                    <p><i className='fa fa-user-circle-o' aria-hidden="true"></i>{user.info.firstName + ' '+ user.info.lastName}
                  </p></a>
                  <Link className="nav-link" to="/signin"><i onClick={signOutUser} class="fa fa-sign-out fa-2x" aria-hidden="true"></i></Link>
        </div> : '' 
        }
      </header>
      <div className="body container">
        <Switch>
          <Route exact path="/">
              <HomeComponent/>
          </Route>
          <Route path="/signin">
              <SignInComponent/>
          </Route>
          <Route path="/flights" render={() => !user.isLogged ?  <Redirect to='/signin' /> :  <FlightComponent/>} />        
        </Switch>
      </div>
    </div>
    </Router>
  )
  }
  

export default App;
