import React from "react";

import { Autocomplete } from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
} from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" display="flex">
      <Toolbar className={classes.toolBar}>
        <IconButton size="large" className={{ mr: 3 }} color="inherit">
          <Menu />
        </IconButton>
        <Typography
          variant="h5"
          className={classes.title}
          style={{ flexGrow: 2 }}
        >
          Trip Advisor
        </Typography>
        <Box display="flex" style={{ float: "right" }}>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ flexGrow: 1 }}
          >
            Explore New Places
          </Typography>
          {/* {<Autocomplete>} */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search ..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* {</Autocomplete>} */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
