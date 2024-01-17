import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const CarDealerForm = () => {
  const carModels = [
    { name: 'POLO TRENDLINE', cost: 870000 },
    { name: 'POLO HIGHLINE', cost: 1009000 },
    { name: 'VIRTUS TRENDLINE', cost: 1105000 },
    { name: 'VIRTUS HIGHLINE', cost: 1308000 },
    { name: 'TAIGUN TRENDLINE', cost: 1489000 },
    { name: 'TAIGUN HIGHLINE', cost: 1542000 },
    { name: 'TAIGUN TOPLINE', cost: 1771000 },
  ];

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [selectedCar, setSelectedCar] = useState(carModels[0]);
  const [carCost, setCarCost] = useState(selectedCar.cost);
  const [fixedCharges, setFixedCharges] = useState({ tcsCharges: true, rtoCharges: true });
  const [additionalCharges, setAdditionalCharges] = useState({
    insurance: false,
    additionalAccessories: false,
  });
  const [dealerDiscount, setDealerDiscount] = useState(0);
const [error, setError] = useState('');
  const calculateTotalCost = () => {
    let totalCost = carCost;

    if (fixedCharges.tcsCharges) {
      totalCost += 11000;
    }

    if (fixedCharges.rtoCharges) {
      totalCost += 113990;
    }

    if (additionalCharges.insurance) {
      totalCost += 47300;
    }

    if (additionalCharges.additionalAccessories) {
      totalCost += 15000;
    }

    if (dealerDiscount > 0) {
      const maxDiscount = 30000;
      if (dealerDiscount > maxDiscount) {
        totalCost -= maxDiscount;
      } else {
        totalCost -= dealerDiscount;
      }
    }

    return totalCost;
  };

  const handleCarModelChange = (event) => {
    const selectedModel = carModels.find((model) => model.name === event.target.value);
    setSelectedCar(selectedModel);
    setCarCost(selectedModel.cost);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const totalCost = calculateTotalCost();
    // Handle form submission or display the total cost as needed
    console.log('Total Cost:', totalCost);
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ maxWidth: 600, margin: "auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Fashmo Car Dealers
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contact Number"
            type = 'number'
            fullWidth
            InputLabelProps={{
            shrink: true,
          }}
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Billing Address"
            fullWidth
            multiline
            rows={3}
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="car-model-label">Car Model</InputLabel>
            <Select
              labelId="car-model-label"
              id="car-model-select"
              value={selectedCar.name}
              onChange={handleCarModelChange}
            >
              {carModels.map((model) => (
                <MenuItem key={model.name} value={model.name}>
                  {model.name}
                  {/* - ₹{model.cost / 100000} Lakh */}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Car Cost"
            fullWidth
            value={`₹${carCost / 100000} Lakh`}
            disabled
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormControlLabel
              control={
                <Checkbox
                  checked={fixedCharges.tcsCharges}
                  onChange={() =>
                    setFixedCharges({
                      ...fixedCharges,
                      tcsCharges: !fixedCharges.tcsCharges,
                    })
                  }
                />
              }
              label="TCS Charges - ₹11,000"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={fixedCharges.rtoCharges}
                  onChange={() =>
                    setFixedCharges({
                      ...fixedCharges,
                      rtoCharges: !fixedCharges.rtoCharges,
                    })
                  }
                />
              }
              label="RTO Charges - ₹1,13,990"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormControlLabel
              control={
                <Checkbox
                  checked={additionalCharges.insurance}
                  onChange={() =>
                    setAdditionalCharges({
                      ...additionalCharges,
                      insurance: !additionalCharges.insurance,
                    })
                  }
                />
              }
              label="Insurance - ₹47,300"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={additionalCharges.additionalAccessories}
                  onChange={() =>
                    setAdditionalCharges({
                      ...additionalCharges,
                      additionalAccessories:
                        !additionalCharges.additionalAccessories,
                    })
                  }
                />
              }
              label="Additional Accessories - ₹15,000"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Dealer Discount"
            type="number"
            fullWidth
            value={dealerDiscount}
            onChange={(e) => {
              const discountValue = Number(e.target.value);
              const discountString = e.target.value.trim(); // Remove leading and trailing spaces
      const isValidDiscount = /^[0-9]+$/.test(discountString); // Check if it's a valid non-negative integer

              if (
                (additionalCharges.insurance ||
                  additionalCharges.additionalAccessories) &&
                discountValue > 30000
              ) {
                setDealerDiscount(30000);
                setError("Maximum discount can be applied is ₹30,000.");
              } else {
                setDealerDiscount(discountValue);
                setError("");
              }
            }}
            disabled={
              !additionalCharges.insurance &&
              !additionalCharges.additionalAccessories
            }
          />
          {error && (
            <Typography variant="body2" color="error" gutterBottom>
              {error}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Total Cost"
            fullWidth
            value={`₹${calculateTotalCost() / 100000} Lakh`}
            disabled
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Generate Invoice
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CarDealerForm;
