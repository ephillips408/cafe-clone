import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { saveShipping } from "../../actions/cartActions";

const useStyles = makeStyles({
  button: {
    display: "flex",
    justifyContent: "flex-end",
  },
  container: {
    paddingBottom: "1.7rem",
    paddingLeft: "1.2rem",
    paddingRight: "1.2rem",
  },
});

const ShippingInfo = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [appartmentInfo, setApartmentInfo] = useState("");
  const [city, setCity] = useState("");
  const [shippingState, setShippingState] = useState(""); // Trying to avoid confusion with the word "state"
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(
      saveShipping(
        name,
        address,
        appartmentInfo,
        city,
        shippingState,
        postalCode,
        country
      )
    );
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <div className="shipping-info-container">
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="given-name"
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              onChange={(event) => setAddress(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Apartment"
              fullWidth
              autoComplete="shipping address-line2"
              onChange={(event) => setApartmentInfo(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              onChange={(event) => setCity(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              onChange={(event) => setShippingState(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              onChange={(event) => setPostalCode(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              onChange={(event) => setCountry(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={() => submitHandler}
            className={classes.button}
          >
            Next
          </Button>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default ShippingInfo;
