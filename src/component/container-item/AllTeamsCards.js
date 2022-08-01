import React from "react";
import "../../styles/AllTeamsCards.css";
import Card from "./Card";

const AllTeamsCards = (props) => {

  const { teams } = props.dataAll;

  return (
    <div className="all-teams-container">
      <h4 className="all-teams-container-header">All Teams</h4>
      <hr width={"90%"} />
      <div className="all-teams-container-cards">
        {teams.map((team) => (
          <Card key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default AllTeamsCards;
