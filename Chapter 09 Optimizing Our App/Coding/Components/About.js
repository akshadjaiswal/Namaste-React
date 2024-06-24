import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent Component");
    return (
      <div className="About-div">
        <h1>About Team</h1>
        <UserClass name={"Akshad"} location={"Pune"} />
      </div>
    );
  }
}

export default About;
