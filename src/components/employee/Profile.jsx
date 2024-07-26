import React from "react";
import "./profile.css";
import Header from "../layout/Header";
import ProfileCard from "./ProfileCard";
import { ProfileData } from "../constants/temporary";
function Profile({ setActiveComponent }) {
  return (
    <div>
      {/* <Header /> */}
      <div className="profile-body">
        {ProfileData.map((Card, index) => (
          <ProfileCard
            key={index}
            image={Card.image}
            email={Card.email}
            team={Card.team}
            dob={Card.dob}
            age={Card.age}
            linkedin={Card.linkedin}
            summary={Card.summary}
            skill1={Card.skill1}
            skill2={Card.skill2}
            name={Card.name}
            address={Card.address}
            phone={Card.phone}
            setActiveComponent={setActiveComponent}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;
