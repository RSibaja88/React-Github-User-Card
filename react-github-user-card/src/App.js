import React from "react";
import axios from "axios";
import FollowerList from "./components/FollowerList";
import UserCard from "./components/UserCard";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
    };
  };
  componentDidMount() {
    axios
    .get(`https://api.github.com/users/RSibaja88`)
    .then(result => {
        this.setState({
          user: result.data
        });
        console.log("RSibaja88 API call results: ", result);
      })
      .catch(error => console.log("Error!!: ", error));
  }
  render(){
    return(
      <div className="App">
        <header className="TitleHeader">
          GitHub User & Follower List
        </header>
        <div className="UserCardSect">
         <UserCard user={this.state.user}/></div>
         <section className="FollowerSect">
           <FollowerList follow={this.state.follow}/>
         </section> 
      </div>
    );
  }
}

export default App;