import React from "react";
import Insights from "./Insights";
import UserLeaderboardCard from "./UserLeaderboard";
import Traffic from "./Traffic";
import SignupLoc from "./SignupLoc";
import Behaviour from "./Behaviour";
import GraphDisplay from "./GraphDisplay";

const Dashboard = () => {
  return (
    <div>
      <GraphDisplay />
      <Insights />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <UserLeaderboardCard />
        </div>
        <div style={{ flex: 1 }}>
          <Traffic />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <SignupLoc />
        </div>

        <div style={{ flex: 1 }}>
          <Behaviour />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
