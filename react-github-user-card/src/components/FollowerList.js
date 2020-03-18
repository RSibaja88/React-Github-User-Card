import React from "react";
import axios from "axios";

class FollowerList extends React.Component{
    state = {
        follow: [],
    };
    componentDidMount(){
        axios
        .get(`https://api.github.com/users/RSibaja88/followers`)
        .then(result => {
            this.setState({
                follow: result.data
            });
            console.log("Follower API Data: ", result);
        })
        .catch(error => console.log("Error!!!: ", error));
    }
    render() {
        return(
            <div className="FCardBox"> {this.state.follow.map(follower => (
                <div className="FollowerCard" key={follower.id}>
                    <h2>{follower.login}</h2>
                    <img className="FPic" src={follower.avatar_url} alt="FollowerPic"/>
                </div>))}            
            </div>
        );
    }
}

export default FollowerList;
