import React from "react";
//Class based componenet
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Member 2</h1>
        <h2>Name: {name}</h2>
        <h3>Position: Marketing Researcher</h3>
        <h3>Location: {location}</h3>
        <h4>LinkedIn : Aaradhana</h4>
      </div>
    );
  }
}
export default UserClass;
