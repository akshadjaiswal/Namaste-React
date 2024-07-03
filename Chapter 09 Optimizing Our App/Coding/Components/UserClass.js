import React from "react";
import { GITHUB_API } from "../utils/constants";
//Class based componenet
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "default",
        bio: "xyz",
        login: "dummy",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    //API Call
    const data = await fetch("https://api.github.com/users/akshadjaiswal");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    console.log("Component willUnmount");
  }
  render() {
    const { name, bio, location, login, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    // console.log(this.props.name + "Child Component ");
    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1>
        <button
          onClick={() => {
            //Never Update State Variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Count
        </button> */}
        <h2>Member </h2>
        <div className="logo-container">
          <img className="logo" src={avatar_url} />
        </div>
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <h3>Location: {location}</h3>
        <h4>Github: {login}</h4>
      </div>
    );
  }
}
export default UserClass;
