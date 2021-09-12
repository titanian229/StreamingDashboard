import React, { useState } from "react";
import { Link } from "react-router-dom";
// import clsx from "clsx";
import { IconButton, AppBar, Toolbar, Typography, Tooltip, Divider } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// import ContactsIcon from "@material-ui/icons/ContactsTwoTone";
// import DescriptionIcon from "@material-ui/icons/DescriptionTwoTone";
// import AddAlertIcon from "@material-ui/icons/AddAlertTwoTone";
// import WorkIcon from "@material-ui/icons/WorkTwoTone";
// import SettingsIcon from "@material-ui/icons/SettingsApplicationsTwoTone";
// import ExitToAppIcon from "@material-ui/icons/ExitToAppTwoTone";
// import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { HomeOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  homeButton: {
    marginLeft: "auto",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography className={classes.title} variant="h6">Streaming Dashboard</Typography>
        <Tooltip title="Home">
          <IconButton
            classname={classes.homeButton}
            edge="start"
            color="inherit"
            aria-label="Home"
            component={Link}
            to="/"
          >
            <HomeOutlined />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar