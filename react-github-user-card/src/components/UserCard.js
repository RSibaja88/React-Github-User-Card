import React from "react";




const UserCard = props => {
    return (
        <div className="CardBox">
            <div className="UserCard">
                <img className="RSPic" src={props.user.avatar_url} alt="profilePic"/>
                <h1>{props.user.name}</h1>
                <h3>{props.user.location}</h3>
                <h3>{props.user.bio}</h3>
            </div>
        </div>
    );
};

export default UserCard;