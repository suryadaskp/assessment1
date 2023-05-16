/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import {
  AppBar,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar color="primary">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }} align="left">
            Blogs.com
          </Typography>
          <Button>
            <Link to="/h" style={{ color: "white", textDecoration: "none" }}>
              {" "}
              HOME
            </Link>{" "}
          </Button>
          <Button>
            <Link to="/a" style={{ color: "white", textDecoration: "none" }}>
              Add link
            </Link>{" "}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
