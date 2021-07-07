import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" to="/" component={Link} />
        <Tab label="More Cats?" to="/catpic/" component={Link} />
        <Tab label="Dogs?" to="/dogs/" component={Link} />
        <Tab label="ToDo" to="/todo/" component={Link} />
        <Tab label="About" to="/about/" component={Link} />
      </Tabs>
    </Paper>
  );
}
export default Header;
