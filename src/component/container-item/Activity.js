import React from "react";

import "../../styles/Activity.css";
import ActivityCard from "./ActivityCard";

const Activity = (props) => {
  const activities = props.dataAll.activities;
  console.log("activities");
  console.log(activities);
  return (
    <div className="activity-container">
      <h4 className="activity-header">Activity</h4>
      <hr />
      <>
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </>
    </div>
  );
};

export default Activity;
