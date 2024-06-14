const User = (props) => {
  const { name, location } = props;
  return (
    <div className="user-card">
      <h1>Member 1</h1>
      <h2>Name: {name}</h2>
      <h3>Position: React.js Developer</h3>
      <h3>Location: {location}</h3>
      <h4>Github : akshadjaiswal</h4>
    </div>
  );
};
export default User;
