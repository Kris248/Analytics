import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserLeaderboardCard = () => {
  const fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

  const leaderboardData = [
    { email: "paula.suarze@con...es", friendsInvited: "6,500", country: "USA" },
    {
      email: "laura.kenet..3@yahoo.com",
      friendsInvited: "2,300",
      country: "Monaco",
    },
    {
      email: "aaron.michael@arg.org",
      friendsInvited: "1,200",
      country: "Prague",
    },
    { email: "jeremy.runner@aol.com", friendsInvited: "900", country: "China" },
  ];

  return (
    <Card
      style={{
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "3px 4px 5px 0px lightgrey",
        margin: "50px 30px 50px 90px",
        borderRadius: "7px",
        padding: "20px",
      }}
    >
      <CardContent style={{ fontSize: "15px" }}>
        <Typography
          style={{
            fontFamily,
            fontWeight: 500,
            fontSize: "22px",
            marginBottom: "20px",
          }}
        >
          User leaderboard
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <Typography
              color="textSecondary"
              style={{
                fontSize: "1.05rem",
                fontWeight: 500,
                color: "black",
                fontFamily,
              }}
            >
              Email
            </Typography>
            {leaderboardData.map((user, index) => (
              <Typography
                key={index}
                paragraph
                style={{
                  fontFamily,
                  marginTop: "25px",
                  marginRight: "15px",
                  fontWeight: 500,
                }}
              >
                {user.email}
              </Typography>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            <Typography
              color="textSecondary"
              style={{
                fontSize: "1.05rem",
                fontWeight: 500,
                color: "black",
                fontFamily,
              }}
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                Friends Invited
              </span>
            </Typography>
            {leaderboardData.map((user, index) => (
              <Typography
                key={index}
                paragraph
                style={{
                  fontFamily,
                  marginTop: "25px",
                  marginRight: "15px",
                  fontWeight: 500,
                  marginLeft: "20px",
                }}
              >
                {user.friendsInvited}
              </Typography>
            ))}
          </div>
          <div style={{ flex: 1 }}>
            <Typography
              color="textSecondary"
              style={{
                fontSize: "1.05rem",
                fontWeight: 500,
                color: "black",
                fontFamily,
              }}
            >
              Country
            </Typography>
            {leaderboardData.map((user, index) => (
              <Typography
                key={index}
                paragraph
                style={{
                  fontFamily,
                  marginTop: "25px",
                  marginRight: "15px",
                  marginLeft: "10px",
                  fontWeight: 500,
                }}
              >
                {user.country}
              </Typography>
            ))}
          </div>
        </div>
        <Typography
          style={{
            fontFamily,
            backgroundColor: "rgba(222, 221, 216, 0.7)",
            color: "black",
            marginTop: "30px",
            fontWeight: 500,
            padding: "5px 15px",
            display: "inline-block",
            borderRadius: "5px",
          }}
        >
          See leaderboard
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserLeaderboardCard;
