import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function HomeComponent() {

    const user = useSelector(state => state.loggedUser);

    return (
        <div className="row justify-content-md-center">
            <div className="col col-md-6 col-sm-6 col-lg-6 ">
                <div className="center">
                    <p className="m-l-text">The next journey at your fingertips </p>
                    <p className="m-s-text">Travix is a global online travel company with operations in 39 countries. </p>
                </div>
                <div>
                {user.isLogged ? 
                <Link to="/travix-sample-app/flights"><button type="button" className="btn sign-btn">Flights</button></Link> :
                <Link to="/travix-sample-app/signin"><button type="button" className="btn sign-btn">Sign In</button></Link> 
                }
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;