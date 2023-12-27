import { useState } from "react";

const User = ({name, location, handle}) => {
  return (
    <div className="user-card">
      <h1>Name : {name}</h1>
      <h3>Location : {location}</h3>
      <h3>{handle}</h3>
    </div>
  );
};

export default User;
