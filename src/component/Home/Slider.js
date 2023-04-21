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
                    content = "Fast-Deliveryで金持ちになる";
                    break;
                case 1:
                    content = "Fast-Deliveryは影響力を継続的に更新します";
                    break;
                case 2:
                    content = "Eコマース配送サービス";
                    break;
                case 3:
                    content = "倉庫サービスと注文処理";
                    break;
            }
            return (
                <div className="dot w-1/4 text-black float-left border-b py-2">
                    <span className="h-full text-sm text-center flex items-center justify-center border-r py-5 text-black cursor-pointer font-sans font-normal transition ease-in-out delay-150 hover:font-semibold hover:text-orange duration-300 ...">{content}</span>
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
                    <img src="https://www.apsfulfillment.com/wp-content/uploads/2017/03/APS_28-1144x763.jpg" alt="Bán Hàng Làm Giàu Cùng Fast-Delivery" />
                </div>
                <div className="w-full cursor-pointer">
                    <img src="https://s3.ap-southeast-1.amazonaws.com/files-scs-prod/public%2Fimages%2F1608186959042-Last+Mile+Delivery+%281%29.png" alt="Fast-Delivery Liên Tục Cập Nhật Tuyến Ảnh Hưởng Do Dịch" />
                </div>
                <div className="w-full cursor-pointer">
                    <img src="https://www.ikea.com/ext/ingkadam/m/1cfa4e91da3b67a9/original/PH186233-crop003.jpg" alt="Fast-Delivery Express - Dịch vụ giao hàng thương mại điện tử" />
                </div>
                <div className="w-full cursor-pointer">
                    <img src="https://static.blog.bolt.eu/LIVE/wp-content/uploads/2020/03/30144617/business-blog_1200x628-1024x536.png" alt="Fast-Delivery Fulfillment - Dịch vụ kho và xử lý đơn hàng" />
                </div>
            </Slider>
        </div>
    );
}
export default SimpleSlider;