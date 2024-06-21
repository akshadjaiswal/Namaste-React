import React from "react";
//Class based componenet
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }
  componentDidMount() {
    console.log("Child Component Did Mount");
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log("Child Component ");
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            //Never Update State Variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Count
        </button>
        <h2>Member </h2>
        <h2>Name: {name}</h2>
        <h3>Position: Marketing Researcher</h3>
        <h3>Location: {location}</h3>
        <h4>LinkedIn : Aaradhana</h4>
      </div>
    );
  }
}
export default UserClass;
