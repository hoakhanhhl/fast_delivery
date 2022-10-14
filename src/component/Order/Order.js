import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CreateOrder from './CreateOrder';
import OrderDetail from './OrderDetail';
import { useSelector } from 'react-redux';
import axiosClient from '../../config/axiosClient';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const steps = ['Tạo đơn hàng', 'Thông tin đơn hàng'];


const theme = createTheme();

function Order() {
    const user = useSelector((state)=> state.user.value);
    const navigate = useNavigate();
    useEffect(()=> {
       if(user === null) {
        alert("Please login to use this function!");
        navigate("/");
       }
    }, []);
    const [activeStep, setActiveStep] = React.useState(0);
    const [data, setData] = React.useState({
        order: {
            nguoiTao: user,
            diaChi: "",
            nguoiNhan: "",
            tenDonHang: "",
            sdt: "",
            value: 0,
            khoiLuong: 0,
            email: null,
            phiShip: 30000
        },
    })
    const [orderID, setOrderID] = React.useState(null);

    const handleSubmitOrder = () => {
        axiosClient.post('/order', data.order)
        .then((res) => {
            console.log(res.data)
            setOrderID(res.data.orderID);
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleNext = () => {
        if(activeStep === 1){
            handleSubmitOrder();
            
        }
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        if(activeStep === 2) {
            return;
        }
        setActiveStep(activeStep - 1);
    };

    const handleChangeOrder = (fieldName, fieldValue) => {
        if(fieldName === 'value' || fieldName === 'khoiLuong') {
            fieldValue = parseFloat(fieldValue);
        }
        setData({...data, order: {...data.order, [fieldName]: fieldValue}})
    }
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <CreateOrder handleChange={handleChangeOrder} data={data}/>;
            case 1:
                return <OrderDetail data={data}/>;
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Order
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <>
                        {activeStep === steps.length ? (
                            <>
                                <Typography variant="h5" gutterBottom>
                                    Thank you.
                                </Typography>
                                <Typography variant="subtitle1" sx={{my: 3}}>
                                    Tạo đơn hàng thành công! <br/> Mã vận đơn của bạn là {orderID}.
                                </Typography>
                                <div className='flex justify-end'>
                                    <NavLink to='/' className="bg-blue-400 text-white p-3 rounded-md font-sans">Về trang chủ</NavLink>
                                </div>
                            </>
                        ) : (
                            <>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                    </Button>
                                </Box>
                            </>
                        )}
                    </>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}
export default Order;