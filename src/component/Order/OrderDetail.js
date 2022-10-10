import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function Review(props) {
    const order = props.data.order;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Thông tin đơn hàng
            </Typography>

            <Typography>{order.tenDonHang}</Typography>
            <Typography>Khối lượng: {order.khoiLuong} (G)</Typography>
            <Typography>Giá trị: {order.value} (VND)</Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                        Thông tin người nhận
                    </Typography>
                    <Typography gutterBottom>{order.nguoiNhan}</Typography>
                    <Typography gutterBottom>Số điện thoại: {order.sdt}</Typography>
                    {order.email !== null &&   <Typography gutterBottom>Email: {order.email}</Typography> }
                    <Typography gutterBottom>Địa chỉ: {order.diaChi}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Thông tin thanh toán
                    </Typography>
                    <Typography gutterBottom>Hình thức ship: {order.phiShip === 30000 ? "COD" : "Tiêu chuẩn"}</Typography>
                    <Typography gutterBottom>Phí ship: {order.phiShip}</Typography>
                    <Grid container>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}