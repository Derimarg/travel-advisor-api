import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

// import mapStyles from "../../mapStyles";
import useStyles from "./styles.js";

const Map = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCGaG4z8rPhKxATZM51NgnLytNlW3Ci6Y4' }}
        defaultCenter={''}
        center={''}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;
