import Img1 from "../img/th.jpeg";
import React, { useState } from "react";
import { login } from "../Services/auth";
import { useNavigate } from "react-router-dom";

function LoginFormCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async () => {
    if (await login(email, password)) {
      navigate(-1);
    } else {
      console.log("Couldn't sign in.");
    }
  };
  return (
    <div className='d-flex justify-content-center my-5'>
      <div className='card mb-3' style={{ maxWidth: "500px" }}>
        <div className='row g-0 d-flex align-items-center'>
          {/* <div className='col-lg-4 d-none d-lg-flex'>
            <img
              src={Img1}
              width={250}
              height={300}
              alt='Trendy Pants and Shoes'
              className='w-100 h-auto rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div> */}
          {/* <div className='col-lg-8'> */}
          <div className='card-body py-5 px-md-5'>
            <div className='text-center'>
              {" "}
              <h1>Login</h1>
            </div>
            <form>
              <div className='form-outline mb-4'>
                <input
                  type='email'
                  id='form2Example1'
                  className='form-control'
                  onChange={handleEmailChange}
                />
                <label className='form-label' htmlFor='form2Example1'>
                  Email address
                </label>
              </div>

              <div className='form-outline mb-4'>
                <input
                  type='password'
                  id='form2Example2'
                  className='form-control'
                  onChange={handlePasswordChange}
                />
                <label className='form-label' htmlFor='form2Example2'>
                  Password
                </label>
              </div>

              <div className='row mb-4'>
                <div className='col d-flex justify-content-center'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='form2Example31'
                      defaultChecked
                    />
                    <label
                      className='form-check-label'
                      htmlFor='form2Example31'
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div className='col'>
                  <a className='primary-color' href='#!'>
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type='button'
                className='ubtn-primary back-primary color-white btn-block mb-4'
                onClick={handleSignIn}
              >
                Sign in
              </button>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default LoginFormCard;
