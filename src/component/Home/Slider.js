import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute top-1/2 z-20 left-3 cursor-pointer text-slate-200 transition ease-in-out delay-150 hover:text-orange" onClick={onClick}>
            <ArrowBackIosOutlinedIcon sx={{ width: "2rem", height: "2rem" }} />
        </div>
    );
}


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute top-1/2 right-3 z-20 cursor-pointer text-slate-200 transition ease-in-out delay-150 hover:text-orange" onClick={onClick}>
            <ArrowForwardIosOutlinedIcon sx={{ width: "2rem", height: "2rem" }} />
        </div>
    );
}
function SimpleSlider() {
    const settings = {
        customPaging: function (i) {
            let content = "";
            switch (i) {
                case 0:
                    content = "Bán Hàng Làm Giàu Cùng GHN";
                    break;
                case 1:
                    content = "GHN Liên Tục Cập Nhật Tuyến Ảnh Hưởng Do Dịch";
                    break;
                case 2:
                    content = "Dịch Vụ Giao Hàng Thương Mại Điện Tử";
                    break;
                case 3:
                    content = "Dịch Vụ Kho Và Xử Lý Đơn Hàng";
                    break;
            }
            return (
                <div className="dot w-1/4 text-black float-left py-3 border-b-2 h-32">
                    <span className="h-full text-sm text-center px-6 border-right-2 flex items-center justify-center border-r-2 py-6 text-black cursor-pointer font-sans font-normal transition ease-in-out delay-150 hover:font-semibold hover:text-orange duration-300 ...">{content}</span>
                </div>
            );
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: " w-full slick-thumb"
    };
    return (
        <div className="w-full">
            <Slider {...settings}>
                <div className="w-full cursor-pointer">
                    <img src="//theme.hstatic.net/200000472237/1000829412/14/slideshow_2.jpg?v=488" alt="Bán Hàng Làm Giàu Cùng GHN" />
                </div>
                <div className="w-full cursor-pointer">
                    <img src="//theme.hstatic.net/200000472237/1000829412/14/slideshow_3.jpg?v=488" alt="GHN Liên Tục Cập Nhật Tuyến Ảnh Hưởng Do Dịch" />
                </div>
                <div className="w-full cursor-pointer">
                    <img src="//theme.hstatic.net/200000472237/1000829412/14/slideshow_7.jpg?v=488" alt="GHN Express - Dịch vụ giao hàng thương mại điện tử" />
                </div>
                <div className="w-full cursor-pointer">
                    <img src="//theme.hstatic.net/200000472237/1000829412/14/slideshow_8.jpg?v=488" alt="GHN Fulfillment - Dịch vụ kho và xử lý đơn hàng" />
                </div>
            </Slider>
        </div>
    );
}
export default SimpleSlider;