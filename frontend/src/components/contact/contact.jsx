import React from "react";

import "./style.scss";

function contact() {
  let image = require("./contact.svg");
  return (
    <div className="contact-container black-txt">
      <h1 className="contact-center">
        Contact us
      </h1>
      <p className="contact-center" style={{fontSize : "1.2em", maxWidth: "600px", margin: "0px auto"}}>Have any doubts? Feel free to contact us by just filling up these details below. We will get in touch soon</p>
      <div className="row" style={{marginTop:"30px"}}>
      <div className="col s12 m6 l6"><img src={image.default} alt="Contact Us" height="80%" width="80%"/></div>
      <div className="col s12 m6 16">
          <form>
            <div className="input-field">
              <label htmlFor="email" className="" style={{fontWeight:"bold"}}>Email</label>
              <br/>
              <input className="contact-us-input" id="email" type="email" />
              <br/>
              <span>We will not share your email with anyone</span>
            </div>

            <div className="input-field">
              <label htmlFor="email1" className="" style={{fontWeight:"bold"}}>Subject</label>
              <br/>
              <input className="contact-us-input" id="email1" type="text" />
              <br/>

            </div>
            <div className="input-field">
              <label htmlFor="email2" className="" style={{fontWeight:"bold"}}>Your Query</label>
              <br/>
              <input className="contact-us-input" id="email2" type="text" />
              <br/>

          </div>

          <button className="btn btn-danger" style={{marginLeft:"550px"}}>Submit</button>
          </form>

      </div>
      </div>

    </div>
    );
}

export default contact;
