import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute top-10 z-20 right-20 cursor-pointer text-slate-600 " onClick={onClick}>
            <ArrowBackIosOutlinedIcon sx={{ width: "1rem", height: "1rem" }} />
        </div>
    );
}


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute top-10 right-10 z-20 cursor-pointer text-slate-600 " onClick={onClick}>
            <ArrowForwardIosOutlinedIcon sx={{ width: "1rem", height: "1rem" }} />
        </div>
    );
}
function SimpleSlider() {
    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="containerComment">
            <Slider {...settings}>
                <div className="box-comment">
                    <p>Fast-Delivery は、Shopee の有名な配送パートナーの 1 つです。 自動仕分けシステムにより、Fast-Delivery が仕分け時間を短縮するだけでなく、Shopee の販売者と購入者の両方が、注文がより迅速かつ安全に配送されることを確信できるようになることを願っています。</p>
                </div>
                <div className="box-comment">
                    <p>Fast-Delivery は 7 年以上にわたり、Lazada の非常に信頼できるパートナーであり続けています。 完全に自動化された仕分けシステムへの投資は、Fast-Delivery の競争力を高め、当社のようなパートナーに優れた配送サービスを提供するのに役立ちます。</p>
                </div>
                <div className="box-comment">
                    <p>Fast-Delivery は Tiki の重要なパートナーであり、Tiki の商品が多くの僻地、さらには離島地区に届くよう支援しています。 これにより、地理的な障壁がなくなり、お客様に大きな利便性がもたらされます。 </p>
                </div>
                <div className="box-comment">
                    <p>Fast-Delivery は、売り手から消費者に商品を輸送する架け橋として、急速に成長する電子商取引業界とデジタル経済にサービスを提供することを目標とする Sendo の重要なパートナーの 1 つです。安全かつ迅速に使用されます。 </p>
                </div>
            </Slider>
        </div>
    );
}
export default SimpleSlider;






