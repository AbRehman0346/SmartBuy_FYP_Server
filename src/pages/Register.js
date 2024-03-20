import React from "react";
import { register } from "../Services/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleSignUp = async () => {
    let firstname = document.getElementById("firstname_input").value.trim();
    let lastname = document.getElementById("lastname_input").value.trim();
    let email = document.getElementById("email_input").value.trim();
    let password = document.getElementById("password_input").value.trim();

    if (!firstname) {
      console.log("Please fill the firstname");
      return;
    }
    if (!lastname) {
      console.log("Please fill the lastname");
      return;
    }
    if (!email) {
      console.log("Please fill the email");
      return;
    }
    if (!password) {
      console.log("Please fill the password");
      return;
    }
    if (!email.includes("@")) {
      console.log("Please provide right email");
      return;
    }
    if (
      await register({
        firstname,
        lastname,
        email,
        password,
      })
    ) {
      navigate(-1);
    } else {
      console.log("Couldn't Register!");
    }
  };

  return (
    <div className='d-flex justify-content-center my-5'>
      <div className='container my-custom-container py-4'>
        <div className='row g-0 align-items-center'>
          <div className='col-lg-6 mb-5 mb-lg-0'>
            <div
              className='card cascading-right'
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              {/* sign up code */}
              <div className='card-body p-5 shadow-5 text-center'>
                <h2 className='fw-bold mb-5'>Sign up now</h2>
                <div className='row'>
                  <div className='col-md-6 mb-4'>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='firstname_input'
                        className='form-control'
                        required
                      />
                      <label className='form-label' htmlFor='firstname_input'>
                        First name
                      </label>
                    </div>
                  </div>
                  <div className='col-md-6 mb-4'>
                    <div className='form-outline'>
                      <input
                        type='text'
                        id='lastname_input'
                        className='form-control'
                        required
                      />
                      <label className='form-label' htmlFor='lastname_input'>
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    id='email_input'
                    className='form-control'
                    required
                  />
                  <label className='form-label' htmlFor='email_input'>
                    Email address
                  </label>
                </div>

                <div className='form-outline mb-4'>
                  <input
                    type='password'
                    id='password_input'
                    className='form-control'
                    required
                  />
                  <label className='form-label' htmlFor='password_input'>
                    Password
                  </label>
                </div>

                {/* <div className='form-check d-flex justify-content-center mb-4'>
                    <input
                      className='form-check-input me-2'
                      type='checkbox'
                      value=''
                      id='form2Example33'
                      checked
                    />
                    <label
                      className='form-check-label'
                      htmlFor='form2Example33'
                    >
                      Subscribe to our newsletter
                    </label>
                  </div> */}

                <button
                  onClick={handleSignUp}
                  className='ubtn-primary back-primary color-white btn-block'
                >
                  Sign up
                </button>

                <div className='text-center'>
                  <p>or sign up with:</p>
                  <button
                    type='button'
                    className='btn btn-link btn-floating mx-1'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </button>

                  <button
                    type='button'
                    className='btn btn-link btn-floating mx-1'
                  >
                    <i className='fab fa-google'></i>
                  </button>

                  <button
                    type='button'
                    className='btn btn-link btn-floating mx-1'
                  >
                    <i className='fab fa-twitter'></i>
                  </button>

                  <button
                    type='button'
                    className='btn btn-link btn-floating mx-1'
                  >
                    <i className='fab fa-github'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 mb-5 mb-lg-0'>
            <img
              src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg'
              className='img w-100 rounded-4 shadow-4'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
