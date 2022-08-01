import React from "react";
import "../../styles/Activity.css";

const ActivityCard = (props) => {
  const unit = props.activity
  console.log("unit")
  console.log(unit)
    return (
    <div className="activity-group">
      <div className="activity-group-image-text-container">
        <img
          className="activity-group-image"
          src={unit.person.avatar}
          alt="user-avatar"
        />

        <p className="activity-group-text">
          {unit.person.name} {unit.action} {unit.target}
        </p>
      </div>

      <span className="activity-group-text-span">{ unit.created_at}</span>
    </div>
  );
};

export default ActivityCard;
