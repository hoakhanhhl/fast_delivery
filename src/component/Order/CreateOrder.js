import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Radio, RadioGroup } from "@mui/material";

function CreateOrder(props) {
  const handleChange= props.handleChange;
  const order = props.data.order;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };
  return (
    <div className="px-2">
      <Typography variant="h6" gutterBottom>
        Tạo đơn hàng
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="nguoiNhan"
            label="Tên người nhận"
            fullWidth
            variant="standard"
            value={order.nguoiNhan}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="sdt"
            label="Số điện thoại"
            fullWidth
            variant="standard"
            value={order.sdt}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="diaChi"
            label="Địa chỉ"
            fullWidth
            variant="standard"
            value={order.diaChi}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="email"
            label="Email"
            fullWidth
            autoComplete="seller-email"
            variant="standard"
            value={order.email}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="tenDonHang"
            label="Tên đơn hàng"
            fullWidth
            variant="standard"
            value={order.tenDonHang}
            onChange={handleChangeInput}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            required
            name="khoiLuong"
            label="Khối lượng (g)"
            fullWidth
            type="number"
            autoComplete="order-weight"
            variant="standard"
            value={order.khoiLuong}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            type="number"
            name="value"
            label="Giá trị"
            fullWidth
            variant="standard"
            value={order.value}
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography sx={{py: 2}}>Hình thức giao hàng</Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="phiShip"
            value={order.phiShip}
            onChange={handleChangeInput}
          >
            <FormControlLabel
              value={30000}
              control={<Radio />}
              label="COD (30.000)"
            />
            <FormControlLabel
              value={15000}
              control={<Radio />}
              label="Tiêu chuẩn (15.000)"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </div>
  );
}
export default CreateOrder;
