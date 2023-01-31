import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div>
        <div className="container mt-5 m-lg-auto p-5 shadow">
          <section className="leave-request">
            <header className="text-center mb-5">
              <div id="logo">
                <img src="https://scet.berkeley.edu/wp-content/uploads/8.-SRM-Logo.png" width="250" height="250" alt="Company Name"/>
              </div>
              
              
              <h1 className="display-1 h1">OD request form</h1>
            </header>
        
      

        <form id="LeaveRequestForm">
         
          <div className="row mb-3">
            <label className="form-label">Name</label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                id="FirstName"
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                id="LastName"
              />
            </div>
          </div>
         
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Student Details</label>
              <input
                type="text"
                className="form-control"
                id="StudentID"
                placeholder="Your Student ID"
              />
            </div>
            <div className="col">
              <label className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="RemainingDays"
                placeholder="Your Email Address"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label className="form-label">Start date<small className="text-muted">(incl. 1st day)</small></label>
              <input type="date" className="form-control" id="StartDate" />
            </div>
            <div className="col">
              <label className="form-label">End date<small className="text-muted">(incl. last day)</small></label>
              <input type="date" className="form-control" id="EndDate" />
            </div>
          </div>
         <a href='/submit' ><button
         type="submit"
         className="btn btn-primary w-100 shadow-sm">
         </button>
           Submit </a>
        </form>
      </section>
    </div>
    </div>

    </div>
  )
}

export default Homepage
