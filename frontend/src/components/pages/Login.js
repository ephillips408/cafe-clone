import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "../../styles/Login.css";
import { login } from "../../actions/adminActions";

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
  button: {},
});

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, adminInfo, error } = adminLogin;
  const dispatch = useDispatch();
  const redirect = "/panel"; // Redirect to panel. Run conditional rendering when not logged in.

  useEffect(() => {
    if (adminInfo) {
      props.history.push(redirect);
    }
    return () => {
      // Cleanup not necessary
    };
  }, [adminInfo]);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(username, password));
  };

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
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <TextField
              className={classes.textInput}
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
              onChange={(event) => setPassword(event.target.value)}
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="default" onClick={submitHandler}>
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Login;
