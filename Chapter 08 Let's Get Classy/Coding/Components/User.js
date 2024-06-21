// functional component
import { useState } from "react";
const User = (props) => {
  const [count] = useState(1);
  const [count2] = useState(2);
  const { name, location } = props;
  return (
    <div className="user-card">
      <h1>Count :{count}</h1>
      <h1>Count :{count2}</h1>
      <h2>Member 1</h2>
      <h2>Name: {name}</h2>
      <h3>Position: React.js Developer</h3>
      <h3>Location: {location}</h3>
      <h4>Github : akshadjaiswal</h4>
    </div>
  );
};
export default User;
