import React, { useContext, useState } from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../constants/Context';
import './Login.css';



const Login = () => {
    const { global_action } = useContext(GlobalContext);

    const [userDetails, setUserDetails] = useState( {username: '', password: ''} );
    const [route, setRoute] = useState("");
    const [errorMessage, setErrorMessage] = useState( {username: false, password: false} );

    const UpdateDetails = (type, e) => {
        if (type === 'username')
            setErrorMessage( {...errorMessage, username: false} );
        
        else if (type === 'password')
            setErrorMessage( {...errorMessage, password: false} );
        
        setUserDetails( {...userDetails, [type]: e.target.value} );
    };

    const UpdateRoute = () => {
        if (userDetails.username !== "" || userDetails.username.split("").includes('@') || userDetails.username.split("").includes('.')
            && userDetails.password.length > 12)
                setRoute("/");
        else
                setRoute("");
    };

    const Validate = () => {
        if (userDetails.username === "" || !userDetails.username.split("").includes('@') || !userDetails.username.split("").includes('.'))
            {
                setErrorMessage( {...errorMessage, username: true} );
            }
        else
            {
                setErrorMessage( {...errorMessage, username: false} );
            }
        
        if (userDetails.password.length < 12)
            {
                setErrorMessage( {...errorMessage, password: true} );
            }
        else
            {
                setErrorMessage( {...errorMessage, password: false} );
            }
    };

    const UpdateStatus = () => {
        if (route !== "")
        {
            global_action( {login_status: true} );
        }
    };

    return (
        <div className="app__login_wrapper flex__center">
            <div className="app__login app__bg" id='login'>

                <div className='app__login-heading'>
                    <SubHeading title="Gericht Login" />
                    <h1 className="headtext__cormorant">Be loved. Be welcomed.</h1>
                </div>

                <div className="app__login-input flex__center">
                    <input type="email" className='email' placeholder='Email Address' value={userDetails.username} onChange={ (e) => { UpdateDetails('username', e); UpdateRoute(); } } />
                    <input type="password" className='password' placeholder='Password' value={userDetails.password} onChange={ (e) => { UpdateDetails('password', e); UpdateRoute(); } } />
                    <button type='button' className="custom__button" onClick={ () => { Validate(); UpdateStatus(); } } ><Link to={route}>Login</Link></button>
                </div>

                {/* {
                errorMessage &&
                <div className="error-message" id='message'>
                    Please enter valid email address!
                </div>
                } */}
                
            </div>
        </div>
    );
};

export default Login;