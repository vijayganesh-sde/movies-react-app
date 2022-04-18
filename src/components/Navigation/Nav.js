import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieIcon from "@mui/icons-material/Movie";
import TVIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigation = useNavigate();
  useEffect(() => {
    if (value === 0) navigation("/");
    else if (value === 1) navigation("/TvSeries");
    else if (value === 2) navigation("/Search");
  });

  return (
    <Box sx={{ width: "100%" }} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Movies"
          icon={<MovieIcon />}
          style={{ backgroundColor: "#CAC5C4" }}
        />
        <BottomNavigationAction
          label="TV Series"
          icon={<TVIcon />}
          style={{ backgroundColor: "#CAC5C4" }}
        />
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
          style={{ backgroundColor: "#CAC5C4" }}
        />
      </BottomNavigation>
    </Box>
  );
}
