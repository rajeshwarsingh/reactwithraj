import React from "react";
import UserContext from "../utils/UserContext";

export default class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch(`https://api.github.com/users/rajeshwarsingh`);
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div>
      <UserContext.Consumer>
        {({user})=>(<h1 className="text-lg font-bold">{user}</h1>)}
      </UserContext.Consumer>
        <div className="user-card">
          <img src={avatar_url} />
          <h1>Name : {name}</h1>
          <h3>Location : {location}</h3>
          <h3>{login}</h3>
        </div>
      </div>
    );
  }
}
