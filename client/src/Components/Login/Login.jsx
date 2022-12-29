import React, {Fragment} from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../API/api';
import { error, isEmail, isEmpty } from '../../Help/FormHelper';



const Login = () => {
    
    let {emailRef, passwordRef} = useRef()

    const loginBtn = () => {
        let email = emailRef.value;
        let password = passwordRef.value

        if(!isEmail(email)){
            error('Invalided Email')
        }
        else if(isEmpty(password)){
            error('Missing Password')
        }
        else{
            login(email, password).then(result => {

                if(result === true){
                    window.location.href = '/'
                }

            }).catch(e => {
                error('something was wrong')
                return false
            })
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4>SIGN IN</h4>
                                <br/>
                                <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input ref={(input)=>passwordRef=input}  placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={loginBtn} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                <hr/>
                                <div className="float-end mt-3">

                                    <div>

                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/register">Sign Up </Link>
                                        <span className="ms-1">|</span> 
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/SendOTP">Forget Password</Link>
                                    </div>
                                    <div>
                                        
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Login;