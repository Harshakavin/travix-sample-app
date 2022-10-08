import logo from './travix-logo_white.webp';
import './App.css';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import FlightComponent from './components/FlightComponent';
import SignInComponent from './components/SignInComponent';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from './actions';
import BookingHistoryComponent from './components/BookingHistoryComponent';

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
                  <Link className="nav-link" to="/travix-sample-app/"><i onClick={signOutUser} className="fa fa-sign-out fa-2x" aria-hidden="true"></i></Link>
        </div> : '' 
        }
      </header>
      <div className="body container">
        <Switch>
          <Route exact path="/">
              <Redirect to='/travix-sample-app' />
          </Route>
          <Route exact path="/travix-sample-app">
              <HomeComponent/>
          </Route>
          <Route path="/travix-sample-app/signin">
              <SignInComponent/>
          </Route>
          <Route path="/travix-sample-app/flights" render={() => !user.isLogged ?  <Redirect to='/travix-sample-app/signin' /> :  <FlightComponent/>} />
          <Route path="/travix-sample-app/bookings" render={() => !user.isLogged ?  <Redirect to='/travix-sample-app/signin' /> :  <BookingHistoryComponent/>} />
        </Switch>
      </div>
    </div>
    </Router>
  )
  }
  

export default App;
