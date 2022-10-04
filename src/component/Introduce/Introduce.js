import { NavLink } from 'react-router-dom'
import React from 'react';
import { AiOutlinePause } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import SimpleSlider from "./SliderIntroduce";
import Footer from "../Footer/Footer"
function Introduce() {
    return (
        <div>
            <div className="banner-image-wrapper ">
                <img src="//theme.hstatic.net/200000472237/1000829412/14/header_pageabout.jpg?v=481" alt="Về GHN" />
            </div>
            <div className="containerIntroduce">
                <div className="title">
                    <span className="subtitle"><AiOutlinePause className="icon-title" />Câu chuyện GHN</span>
                    <h2 className="lastTitle">10 năm đồng hành cùng E-Commerce Việt Nam</h2>
                </div>
                <div className="content">
                    <p className="p-introduce">GHN (Giao Hàng Nhanh) - Công ty giao nhận đầu tiên tại Việt Nam được thành lập năm 2012, với sứ mệnh phục vụ nhu cầu vận chuyển chuyên nghiệp của các đối tác Thương mại điện tử trên toàn quốc. GHN cam kết mang đến cho khách hàng những trải nghiệm dịch vụ giao nhận nhanh, an toàn, hiệu quả giúp người bán hàng bán được nhiều hơn, người mua hàng hài lòng hơn.</p>
                </div>
                <div className="s-banner">
                    <img src="//theme.hstatic.net/200000472237/1000829412/14/img_s-about_pageabout.jpg?v=481" alt="10 năm đồng hành cùng E-Commerce Việt Nam" />
                </div>
            </div>
            <div className="linechat">
                <div className="containerLinechat">
                    <div className="left-col">
                        <div className="s-title">
                            <span className="subtitle1"><AiOutlinePause className="icon-title" />Thành tích nổi bật</span>
                            <p className="p-introduce">GHN luôn dành trọn tâm huyết để mang đến những dịch vụ giao nhận xuất sắc nhất. Niềm đam mê chất lượng đã giúp GHN đạt được những thành tích đáng kinh ngạc trong suốt 10 năm qua:<br />
                                <br /> - 20.000.000 đơn hàng được giao thành công mỗi tháng
                                <br /> - Hơn 100.000 shop online và doanh nghiệp đã tin dùng
                                <br /> - Đối tác chiến lược của Tiki, Shopee, Lazada, Sendo
                                <br /> - Mạng lưới giao nhận phủ sóng 100% 63 tỉnh thành
                                <br /> - Đạt tốc độ xử lý 500.000 đơn hàng/ ngày
                            </p>
                        </div>
                    </div>
                    <div className="right-col">
                        <div className="line">
                            <div className="author">
                                <img src="//theme.hstatic.net/200000472237/1000829412/14/line_avatar1.jpg?v=481" alt="" />
                            </div>
                            <div className="message">
                                <span><b></b></span>
                                <p className="p-introduce-x">Dù bạn đang sở hữu một trang thương mại điện tử lớn, là chủ của một cửa hàng trực tuyến hay đơn giản một người bán hàng thông thường - GHN luôn sẵn sàng cung cấp dịch vụ giao nhận hàng chuyên nghiệp cho bạn.</p>
                                <AiOutlinePause className="icon-affter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="client">
                <div className="containerClient">
                    <div className="client-title">
                        <span className="subtitle1"><AiOutlinePause className="icon-title" />Đối tác của GHN</span>
                        <h2 className="lastTitle">Hơn 100.000 khách hàng đã tin dùng dịch vụ</h2>
                    </div>
                    <div className="listing_client_logo">
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client1.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client2.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client3.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client4.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client5.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client6.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client7.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client8.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client9.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client10.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client11.png?v=481" alt='' /></NavLink>
                        </div>
                        <div className="client-logo">
                            <NavLink to="/Introduce" className="item_lg"><img src="//theme.hstatic.net/200000472237/1000829412/14/logo_client12.png?v=481" alt='' /></NavLink>
                        </div>
                    </div>

                </div>
            </div >
            <div className='comment'>
                <SimpleSlider />
            </div>
            <div className="staff">
                <div className="containerStaff">
                    <div className="staff-title">
                        <span className="subtitle1"><AiOutlinePause className="icon-title" />Khác biệt dịch vụ</span>
                        <h2 className="lastTitle">Giao nhận chuyên nghiệp cho E-commerce</h2>
                    </div>
                    <div className="staff-content">
                        <div className="box-staff">
                            <div className="box-staff-img">
                                <img src="//theme.hstatic.net/200000472237/1000829412/14/staff_avatar1.jpg?v=481" alt="Đa dạng dịch vụ" />
                            </div>
                            <div className="box-staff-desc">
                                <h3>Đa dạng dịch vụ</h3>
                                <p className="p-introduce">Giao hàng thương mại điện tử, Vận tải cho doanh nghiệp, Kho bãi và xử lý hàng hóa</p>
                            </div>
                        </div>
                        <div className="box-staff">
                            <div className="box-staff-img">
                                <img src="//theme.hstatic.net/200000472237/1000829412/14/staff_avatar2.jpg?v=481" alt="Hệ thống Auto-Sorting" />
                            </div>
                            <div className="box-staff-desc">
                                <h3>Hệ thống Auto-Sorting</h3>
                                <p className="p-introduce">Tự hào sở hữu 2 hệ thống phân loại hàng tự động 100% đầu tiên tại Việt Nam</p>
                            </div>
                        </div>
                        <div className="box-staff">
                            <div className="box-staff-img">
                                <img src="//theme.hstatic.net/200000472237/1000829412/14/staff_avatar3.jpg?v=481" alt="Chính sách ưu đãi hấp dẫn" />
                            </div>
                            <div className="box-staff-desc">
                                <h3>Chính sách ưu đãi hấp dẫn</h3>
                                <p className="p-introduce">Miễn phí Lấy hàng tận nơi, Miễn phí Thu hộ, Miễn phí Giao lại, Hoàn đến 6% khi nạp GHN Xu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hiring">
                <div className="containerHiring">
                    <div className="col-left">
                        <div className="s-abouttitle">
                            <h2 className="lastTitle"> Bạn muốn tham gia cùng chúng tôi</h2>
                            <p className="p-introduce">Luôn có cơ hội cho bạn tại GHN. Khám phá các cơ hội hấp dẫn và tham gia vào đội ngũ của chúng tôi.</p>
                        </div>
                        <a className="get-in-touch" href="https://ghn.vn/blogs/tuyen-dung">
                            <span className="icon">
                                <ImMail4 className='w-full' />
                            </span>
                            <span>Tìm kiếm cơ hội nghề nghiệp</span>
                        </a>
                    </div>
                    <div className="col-right">
                        <img src="//theme.hstatic.net/200000472237/1000829412/14/hiring-banner.png?v=481" alt=" Bạn muốn tham gia cùng chúng tôi" />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Introduce;
