import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="About-div">
      <h1>About</h1>
      <User name={"Akshad Jaiswal (function)"} location={"Pune"} />
      <UserClass name={"Aaradhana (class )"} location={"Pune"} />
    </div>
  );
};

export default About;
