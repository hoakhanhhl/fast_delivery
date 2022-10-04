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
                    <p>GHN là một trong những đối tác vận chuyển uy tín của Shopee. Chúng tôi kỳ vọng với hệ thống phân loại hàng tự động, GHN không chỉ rút ngắn thời gian phân loại mà còn giúp cả người bán và người mua trên Shopee an tâm đơn hàng được giao nhanh hơn, an toàn hơn.</p>

                </div>
                <div className="box-comment">
                    <p>GHN đã và luôn là đối tác rất tin cậy của Lazada hơn 7 năm qua. Việc đầu tư vào Hệ thống phân loại hàng hoàn toàn tự động sẽ giúp GHN tăng tính cạnh tranh, đồng thời mang đến cho các đối tác như chúng tôi một dịch vụ vận chuyển xuất sắc.</p>
                </div>
                <div className="box-comment">
                    <p>GHN là một đối tác quan trọng với Tiki, giúp hàng hoá trên Tiki đến được với nhiều tỉnh xa, thậm chí đến cả những huyện đảo. Điều này mang đến sự thuận lợi rất lớn cho khách hàng, xoá bỏ được các rào cản về địa lý. </p>
                </div>
                <div className="box-comment">
                    <p>GHN là một trong những đối tác quan trọng của Sendo với mục tiêu phục vụ ngành thương mại điện tử và nền kinh tế số đang tăng trưởng vượt bậc, là cầu nối vận chuyển hàng hoá từ các nhà bán đến tay người tiêu dùng một cách an toàn và nhanh chóng. </p>
                </div>
            </Slider>
        </div>
    );
}
export default SimpleSlider;






