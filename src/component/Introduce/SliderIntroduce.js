import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { AiOutlinePause } from "react-icons/ai";

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
                <div className="dot w-1/4 text-black float-left py-3 border-b-2">
                    <span className="border-right-2 flex items-center justify-center border-r-2 py-6 text-black cursor-pointer font-sans font-normal transition ease-in-out delay-150 hover:font-semibold hover:text-orange duration-300 ...">{content}</span>
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
        dotsClass: " w-full slick-thumb"
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








//                     <div className="slide-comment owl-carousel owl-loaded owl-drag">

//                         <div className="owl-stage-outer"><div className="owl-stage" style="width: 4680px; transform: translate3d(-3510px, 0px, 0px); transition: all 0.25s ease 0s;"><div className="owl-item" style="width: 1170px;"><div className="slide-comment-item">
//                             <div className="box-desc">
//                                 <p>GHN là một trong những đối tác vận chuyển uy tín của Shopee. Chúng tôi kỳ vọng với hệ thống phân loại hàng tự động, GHN không chỉ rút ngắn thời gian phân loại mà còn giúp cả người bán và người mua trên Shopee an tâm đơn hàng được giao nhanh hơn, an toàn hơn.</p>
//                             </div>
//                             <div className="box-author">
//                                 <div className="img">
//                                     <img src="//theme.hstatic.net/200000472237/1000829412/14/cmt_avatar1.jpg?v=481" alt="Anh Trần Tuấn Anh" />
//                                 </div>
//                                 <div className="name">
//                                     <span>Anh Trần Tuấn Anh</span>
//                                     <span>Giám Đốc Điều Hành Shopee Việt Nam</span>
//                                 </div>
//                             </div>
//                         </div></div><div className="owl-item" style="width: 1170px;"><div className="slide-comment-item">
//                             <div className="box-desc">
//                                 <p>GHN đã và luôn là đối tác rất tin cậy của Lazada hơn 7 năm qua. Việc đầu tư vào Hệ thống phân loại hàng hoàn toàn tự động sẽ giúp GHN tăng tính cạnh tranh, đồng thời mang đến cho các đối tác như chúng tôi một dịch vụ vận chuyển xuất sắc.</p>
//                             </div>
//                             <div className="box-author">
//                                 <div className="img">
//                                     <img src="//theme.hstatic.net/200000472237/1000829412/14/cmt_avatar2.jpg?v=481" alt="Anh Fabian Wandt" />
//                                 </div>
//                                 <div className="name">
//                                     <span>Anh Fabian Wandt</span>
//                                     <span>Giám Đốc Vận Hành Lazada</span>
//                                 </div>
//                             </div>
//                         </div></div><div className="owl-item" style="width: 1170px;"><div className="slide-comment-item">
//                             <div className="box-desc">
//                                 <p>GHN là một đối tác quan trọng với Tiki, giúp hàng hoá trên Tiki đến được với nhiều tỉnh xa, thậm chí đến cả những huyện đảo. Điều này mang đến sự thuận lợi rất lớn cho khách hàng, xoá bỏ được các rào cản về địa lý. </p>
//                             </div>
//                             <div className="box-author">
//                                 <div className="img">
//                                     <img src="//theme.hstatic.net/200000472237/1000829412/14/cmt_avatar3.jpg?v=481" alt="Anh Trần Ngọc Thái Sơn" />
//                                 </div>
//                                 <div className="name">
//                                     <span>Anh Trần Ngọc Thái Sơn</span>
//                                     <span>Nhà Sáng Lập &amp; Tổng Giám Đốc Tiki</span>
//                                 </div>
//                             </div>
//                         </div></div><div className="owl-item active" style="width: 1170px;"><div className="slide-comment-item">
//                             <div className="box-desc">
//                                 <p>GHN là một trong những đối tác quan trọng của Sendo với mục tiêu phục vụ ngành thương mại điện tử và nền kinh tế số đang tăng trưởng vượt bậc, là cầu nối vận chuyển hàng hoá từ các nhà bán đến tay người tiêu dùng một cách an toàn và nhanh chóng. </p>
//                             </div>
//                             <div className="box-author">
//                                 <div className="img">
//                                     <img src="//theme.hstatic.net/200000472237/1000829412/14/cmt_avatar4.jpg?v=481" alt="Anh Trần Hải Linh" />
//                                 </div>
//                                 <div className="name">
//                                     <span>Anh Trần Hải Linh</span>
//                                     <span>Tổng Giám Đốc Sendo</span>
//                                 </div>
//                             </div>
//                         </div></div></div></div><div className="owl-nav"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next disabled"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
//                 </div>
