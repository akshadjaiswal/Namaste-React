import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="About-div">
        <h1>About Class Component</h1>
        {/* <User name={"Akshad Jaiswal (function)"} location={"Pune"} /> */}
        <UserClass name={"Aaradhana (class )"} location={"Pune"} />
      </div>
    );
  }
}

export default About;
