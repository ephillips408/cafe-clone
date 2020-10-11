import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "../../styles/Login.css"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 28,
    paddingBottom: 10,
  },
  textInput: {
    paddingBottom: 10,
  },
  button: {
    
  }
});

const Login = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="login-card">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Login
            </Typography>
            <TextField
              className={classes.textInput}
              id="outlined-search"
              label="Username"
              type="search"
              variant="outlined"
            />
            <br />
            <TextField
              className={classes.textInput}
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="default">
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Login;