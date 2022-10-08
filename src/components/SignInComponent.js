import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, signIn } from "../actions";
import {useHistory} from 'react-router-dom';
import { login } from "../apis/userApi";

function SignInComponent() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.loggedUser);
    const navigate = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const loggin = () => {
         setLoading(true)
         login({username,password}).then( response =>{
            dispatch(setUser(response));
            navigate.push('/travix-sample-app/flights');
        }).catch(err=>{
            console.log(err);
            setLoading(false);
            setError('Invalid username or password'); 
        });
    }

    const usernameChanage = (e) => {
        setUsername(e.target.value.trim());
        setError('');
    }
    const passwordCnage = (e) => {
        setPassword(e.target.value.trim());
        setError('');
    }

    return (
        <div>
            <div className="container sign-in-info">
                <div className='row'>
                    <div className="col col-md-12">
                        <h1>Sign In <i className="fa fa-sign-in" aria-hidden="true"></i></h1>
                    </div>
                </div>
            </div>
            <div className="container sign-background">
                <input type="text" className="myInput" onChange={usernameChanage} placeholder="USERNAME" />
                <input type="password" className="myInput" onChange={passwordCnage} placeholder="PASSWORD" />
                <p>{error}</p>
                <button disabled={!username || !password} type="button" onClick={loggin} className="btn sign-btn">Sign in</button>
            </div>
        </div>
    );

}

export default SignInComponent;

