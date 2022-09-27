import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Seller(props) {
    const { handleChange } = props
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        handleChange(name, value);
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Seller
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                        autoComplete="seller-line"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        fullWidth
                        autoComplete="seller-level"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="email"
                        label="Email"
                        fullWidth
                        autoComplete="seller-email"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="shopId"
                        name="shopId"
                        label="Shop ID"
                        fullWidth
                        autoComplete="shop-id"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="orderName"
                        name="orderName"
                        label="Order name"
                        fullWidth
                        autoComplete="order-name"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="weight"
                        label="Weight"
                        fullWidth
                        autoComplete="order-weight"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="orderValue"
                        name="orderValue"
                        label="Order Value"
                        fullWidth
                        autoComplete="order-value"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="fees"
                        label="SHIPPING FEES"
                        helperText="(Including VAT tax)"
                        fullWidth
                        autoComplete="shipping-fees"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="deliveryDate"
                        label="Estimated delivery date"
                        fullWidth
                        autoComplete="delivery-date"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="Current"
                        label="Current status"
                        fullWidth
                        autoComplete="current"
                        variant="standard"
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember shop ID details for next time"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
export default Seller;