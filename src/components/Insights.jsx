import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Insights = () => {
  const fontFamily = " 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

  return (
    <>
      <Card
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "3px 4px 5px 0px lightgrey",
          margin: "0px 90px",
          borderRadius: "7px",
          padding: "20px",
        }}
      >
        <CardContent style={{ fontFamily: "Arial", fontSize: "15px" }}>
          <Typography
            variant="h4"
            style={{
              fontWeight: 500,
              fontFamily,
            }}
          >
            ZooTools Insights
            <Typography
              variant="body1"
              style={{
                fontFamily,
                margin: "1px 0",
                fontSize: "18.5px",
                fontWeight: 500,
              }}
            >
              Making analytics simple and actionable
            </Typography>
          </Typography>
          <div
            style={{
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
            }}
          >
            <div>
              <Typography
                color="textSecondary"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: "bold",
                  color: "rgba(19, 19, 18, 0.8)",
                  fontFamily,
                }}
              >
                Summary
              </Typography>
              <Typography paragraph style={{ marginTop: "10px", fontFamily }}>
                <span style={{ fontWeight: 500, color: "black" }}>
                  Signups are slowing down by 5%-
                </span>
                <span> </span>compared to last week.
              </Typography>
              <Typography paragraph style={{ fontFamily }}>
                <span style={{ fontWeight: 500, color: "black" }}>80%</span> of
                your signups were invited by other members.
              </Typography>
              <Typography paragraph style={{ fontFamily }}>
                <span style={{ fontWeight: 500, color: "black" }}>80%</span> of
                your signups were invited by a friend.
              </Typography>
              <Typography paragraph style={{ fontFamily }}>
                <span style={{ fontWeight: 500, color: "black" }}>80%</span> of
                your signups were invited by a friend.
              </Typography>
            </div>
            <div>
              <Typography
                color="textSecondary"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: "bold",
                  color: "rgba(19, 19, 18, 0.8)",
                  fontFamily,
                }}
              >
                Recommendation
              </Typography>
              <Typography
                paragraph
                style={{ marginTop: "10px", fontFamily, fontWeight: 500 }}
              >
                Make sure to promote and share your form.
              </Typography>
              <Typography
                paragraph
                style={{ fontFamily, marginTop: "20px", fontWeight: 500 }}
              >
                Congrats! This is huge. Keep giving rewards for your users.
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Insights;
