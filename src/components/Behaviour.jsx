import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Behaviour = () => {
  const fontFamily = " 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

  const behaviourData = [
    { country: "United states", city: "30,000" },
    { country: "Germany", city: "20,000" },
    { country: "Netherlands", city: "10,000" },
    { country: "India", city: "5,000" },
    { country: "Japan", city: "3,000" },
    { country: "Other", city: "2,000" },
  ];

  return (
    <Card
      style={{
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "3px 4px 5px 0px lightgrey",
        // margin: "0px 80px",
        margin: "5px 90px 0px 30px",
        borderRadius: "7px",
        padding: "20px",
      }}
    >
      <CardContent style={{ fontFamily: "Arial", fontSize: "15px" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Typography
              style={{
                fontFamily,
                fontWeight: 500,
                fontSize: "22px",
                marginBottom: "20px",
              }}
            >
              Behaviour
            </Typography>
            {behaviourData.map((country, index) => (
              <Typography
                key={index}
                paragraph
                style={{
                  fontFamily,
                  fontWeight: 500,
                  marginLeft: "10px",            
                  background: `linear-gradient(to right, rgba(255, 240, 142, 0.7) ${
                    (behaviourData.length - index) * 15
                  }%, white 0%)`,
                }}
              >
                {country.country}
              </Typography>
            ))}
          </div>

          <div style={{ flex: 1 }}>
            <Typography
              style={{
                fontFamily,
                backgroundColor: "rgba(222, 221, 216, 0.7)",
                color: "black",
                marginLeft: "40px",
                fontWeight: 500,
                padding: "2px 12px",
                display: "inline-block",
                borderRadius: "5px",
              }}
            >
              Browsers
            </Typography>
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
              Decides
            </Typography>
            <br />
            {behaviourData.map((city, index) => (
              <Typography
                key={index}
                paragraph
                style={{ fontFamily, fontWeight: 500, marginLeft: "5px" }}
              >
                {city.city}
              </Typography>
            ))}
          </div>
        </div>

        <div style={{ flex: 1 }}>
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
            See all countries
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Behaviour;
