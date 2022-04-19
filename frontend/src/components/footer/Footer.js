import { React } from "react";
import { Typography, Grid } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  const copyright = "\u00A9";
  const nbsp = "\u00A0";
  return (
    <Grid
      alignItems="center"
      container
      style={{ backgroundColor: "#2D4250", height: "4rem" }}
    >
      <Grid item xs={12} md={12}>
        <Typography style={{ color: "white" }} variant="h6">
          <a style={{ color: "skyblue" }} href="#" target={"_blank"}>
            Privacy Policy
          </a>
          {nbsp} | {copyright} 2022 Highradius Corporation. All Rights Reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
