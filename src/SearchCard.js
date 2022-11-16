import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
const ViewPhoto = ({ data }) => {
  return (
    <Card style={{ margin: 12, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
      <CardMedia
        //style={{ objectFit: "contain" }}
        //height="200"
        component="img"
        src={data.url}
        // Kyle Put this random image here.
        // image="https://source.unsplash.com/random"
        // alt="random"
      />
      <CardContent>
        <Typography variant="h3" align="left">
          {data.title}
        </Typography>
        <Typography variant="body1" align="left">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ViewPhoto;
