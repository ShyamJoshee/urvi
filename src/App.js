import React from "react";
import "./styles.css";
const App = () => {
  return (
    <div>
      <div className="container">
        <div className="community">
          <h2 style={{ color: "rgb(0,185,195)" }}> Join Our community</h2>
          <br></br>
          <h2 style={{ color: "rgb(100,158,36)" }}>
            30-day,hassle free monkey back gurarantee
          </h2>{" "}
          <br></br>
          <p className="1stpara" style={{ color: "rgb(149,166,197)" }}>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="popat">
          <div className="card">
            <h3 style={{ color: "antiquewhite" }}>Monthly Subscription</h3>
            <h3 style={{ color: "antiquewhite" }}>
              {" "}
              <span>$29 </span> Per Month
            </h3>
            <h3 style={{ color: "antiquewhite" }}>
              Full access for less tham $1 a day
            </h3>
            <br></br>

            <button
              className="btn"
              style={{ color: "antiquewhite" }}
              type="button"
            >
              <h3>Sign Up</h3>{" "}
            </button>
          </div>

          <div className="why_us">
            <h3 style={{ color: "antiquewhite" }}> Why us</h3>
            <p style={{ color: "antiquewhite" }}>
              Tutorials by industry experts Peer & expert code review Coding
              excercises Access to out Github repos Community forum Flashcard
              decks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
