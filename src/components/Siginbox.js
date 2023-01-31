import React from 'react'
import './styles.css'



export default function Siginbox() {
  return (
    <>
    <div className="signinpage">
      <div className='center'>
        <h2>Sign In</h2>
        <form action=''>
          <div class="mb-3">
            <div class="logo">
              <img src="https://scet.berkeley.edu/wp-content/uploads/8.-SRM-Logo.png" alt="" />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Registration Number</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Registration Number"
                id="RegNum"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label class="form-label">Password</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Password"
                id="Password"
              />
            </div>
          </div>

          <div class="pass">Forgot Password?</div>
          <div className="submit">
          <button type="submit" input='submit' class="btn btn-primary w-100 shadow-sm">
          <a href='/home'>
            Submit
            </a>
          </button>
          </div>
          
       
          
        </form>
      </div>
      </div>
    </>
    
  );
}
