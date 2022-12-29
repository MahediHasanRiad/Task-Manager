import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { registration } from "../../API/api";
import { error, isEmail, isEmpty, isMobile } from "../../Help/FormHelper";


const Registration = () => {

    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef = useRef()
    let navigate = useNavigate()    // redirect login page

    const onRegistration = () => {
       const email = emailRef.value
       const firstName = firstNameRef.value
       const lastName = lastNameRef.value
       const mobile = mobileRef.value
       const password = passwordRef.value

       if(!isEmail(email)){
        error('Valid email required')
       }
       else if(isEmpty(firstName)){
        error('Valid First name required')
       }
       else if(isEmpty(lastName)){
        error('Valid Last name required')
       }
       else if(!isMobile(mobile)){
        error('Valid Mobile number required')
       }
       else if(isEmpty(password)){
        error('password required')
       }
       else{
        
        registration(email, firstName, lastName, mobile, password).then(result => {
          if(result === true){
              navigate('/login')    // redirect login page
          }
        }).catch(e => {
            error('Error')
        })


       }
    }
  

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-10 col-lg-10 center-screen">
          <div className="card animated fadeIn w-100 p-3">
            <div className="card-body">
              <h4>Sign Up</h4>
              <hr />
              <div className="container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                  <div className="col-md-4 p-2">
                    <label>Email Address</label>
                    <input
                      ref={(input)=>emailRef=input}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>First Name</label>
                    <input
                      ref={(input)=>firstNameRef=input}
                      placeholder="First Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Last Name</label>
                    <input
                      ref={(input)=>lastNameRef=input}
                      placeholder="Last Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Mobile Number</label>
                    <input
                      ref={(input)=>mobileRef=input}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="mobile"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Password</label>
                    <input
                      ref={(input)=>passwordRef=input}
                      placeholder="User Password"
                      className="form-control animated fadeInUp"
                      type="password"
                    />
                  </div>
                </div>
                <div lassName="row mt-2 p-0">
                  <div className="col-md-4 p-2">
                    <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">
                      Complete
                    </button>
                    <button className="btn w-100 h6 float-end animated fadeInUp">
                      <a href="/login">Login</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
