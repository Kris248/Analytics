import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

const GraphDisplay = () => {
  const fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

  const columnCount = 36;
  const columnWidth = 15;
  const columnSpacing = 15;
  const columnBorderRadius = "10px";

  const columns = [];

  for (let i = 0; i < columnCount; i++) {
    columns.push(
      <div
        key={i}
        style={{
          display: "inline-block",
          width: `${columnWidth}px`,
          height: `${Math.floor(Math.random() * 150) + 50}px`, // Random column heights for demonstration
          backgroundColor: "yellow",
          marginRight: `${columnSpacing}px`,
          borderRadius: columnBorderRadius,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        style={{
          margin: "40px 90px",
          padding: "10px",
          position: "relative",
        }}
      >
        <Card
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            boxShadow: "0px 0px 0px 0px white",
          }}
        >
          <Typography variant="h5" style={{ fontFamily, fontWeight: 500 }}>
            Summer referral competition
          </Typography>
        </Card>

        {/* 1h 24h 30d 60d Card */}
        <Card
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "inline-block",

            boxShadow: "3px 4px 5px 0px lightgrey",

            borderRadius: "7px",
            padding: "8px 45px",

            color: "grey",
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontFamily,
              fontSize: "16px",
              fontWeight: "bold",
              wordSpacing: "25px",
              color: "grey",
            }}
          >
            1h 24h{" "}
            <span
              style={{
                fontFamily,
                backgroundColor: "rgb(226, 228, 232)",
                color: "grey",
                padding: "5px 15px",
                // display:'inline-block',
                borderRadius: "5px",
              }}
            >
              30d
            </span>{" "}
            60d
          </Typography>
        </Card>
      </div>

      <Card
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "3px 4px 5px 0px lightgrey",
          margin: "50px 90px",
          borderRadius: "7px",
          padding: "20px",
          position: "relative", // Set relative positioning for the main card
        }}
      >
        {/* Summer referral competition Card */}

        <CardContent style={{ fontSize: "15px", paddingTop: "10px" }}>
          <Typography variant="h4" style={{ fontFamily }}>
            <b>100,000</b>
            <span style={{ marginLeft: "10px" }}>
              <GroupAddOutlinedIcon />
            </span>
            <Typography
              style={{
                fontFamily,
                fontSize: "20px",
                marginLeft: "10px",
              }}
            >
              Participants
            </Typography>
          </Typography>
          <div style={{ marginTop: "20px" }}>{columns}</div>
        </CardContent>
      </Card>
    </>
  );
};

export default GraphDisplay;
