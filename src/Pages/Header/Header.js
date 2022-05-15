import "./Header.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import * as React from "react";
import useState from "react";
import Redirect from "react-router-dom";
import Card from "../Card/Card";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import LiveTvIcon from "@mui/icons-material/LiveTv";
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="header">
        <a class="tvicon">
          <LiveTvIcon fontSize="large" color="action" />
        </a>
        <a class="title_main">Fun Zone</a>
        <div class="dashboard">
          <Button
            id="fade-button"
            sx={{ color: "white" }}
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Dashboard
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button"
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <div>
          <a
            class="git"
            href="https://github.com/vijayganesh-sde"
            target="_blank"
          >
            <GitHubIcon fontSize="large" color="action" />
          </a>
          <a
            class="linkedin"
            href="https://linkedin.com/in/sr-vijay-ganesh-76b750222/"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" color="action" />
          </a>
        </div>
      </div>
    </>
  );
}
