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
                <img src="https://static.blog.bolt.eu/LIVE/wp-content/uploads/2020/03/30144617/business-blog_1200x628-1024x536.png" alt="Về Fast-Delivery" />
            </div>
            <div className="containerIntroduce">
                <div className="title">
                    <span className="subtitle"><AiOutlinePause className="icon-title" />Fast-Deliveryの物語</span>
                    <h2 className="lastTitle">Eコマースベトナムでの10年</h2>
                </div>
                <div className="content">
                    <p className="p-introduce">Fast-Delivery (Fast Delivery) - ベトナムで最初の転送会社は 2012 年に設立され、全国の E コマース パートナーの専門的な配送ニーズに応えることを使命としています。 Fast-Delivery は、売り手がより多くを販売し、買い物客がより満足するのに役立つ、迅速で安全かつ効果的な配送サービス体験を顧客に提供することに取り組んでいます。</p>
                </div>
                <div className="s-banner">
                    <img src="https://www.advotics.com/wp-content/uploads/2022/02/surat-jalan-01-1-4.png" alt="10 năm đồng hành cùng E-Commerce Việt Nam" />
                </div>
            </div>
            <div className="linechat">
                <div className="containerLinechat">
                    <div className="left-col">
                        <div className="s-title">
                            <span className="subtitle1"><AiOutlinePause className="icon-title" />Thành tích nổi bật</span>
                            <p className="p-introduce">Fast-Delivery は常に最高の転送サービスを提供することに専念しています。 品質への情熱は、Fast-Delivery が過去 10 年間に驚異的な成果を達成するのに役立ちました。<br />
                                <br /> - 毎月 20,000,000 件の注文が正常に配送されました
                                <br /> - 100,000 以上のオンライン ショップや企業が信頼を寄せています
                                <br /> - Tiki、Shopee、Lazada、Sendo の戦略的パートナー
                                <br /> - 63 州の 100% をカバーする配送ネットワーク
                                <br /> - 500,000 注文/日の処理速度を実現
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
                                <p className="p-introduce-x">あなたが大規模な電子商取引サイトを所有しているか、オンライン ストアの所有者であるか、単に普通の販売者であるかに関係なく、Fast-Delivery は常にプロフェッショナルな配送サービスを提供する準備ができています。</p>
                                <AiOutlinePause className="icon-affter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="client">
                <div className="containerClient">
                    <div className="client-title">
                        <span className="subtitle1"><AiOutlinePause className="icon-title" />Fast-Deliveryのパートナー</span>
                        <h2 className="lastTitle">100,000 人以上の顧客がこのサービスを信頼しています</h2>
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
                        <span className="subtitle1"><AiOutlinePause className="icon-title" />サービスの違い</span>
                        <h2 className="lastTitle">e コマース向けのプロフェッショナルな配送</h2>
                    </div>
                    <div className="staff-content">
                        <div className="box-staff">
                            <div className="box-staff-img">
                                <img src="//theme.hstatic.net/200000472237/1000829412/14/staff_avatar1.jpg?v=481" alt="Đa dạng dịch vụ" />
                            </div>
                            <div className="box-staff-desc">
                                <h3>サービスの多様性</h3>
                                <p className="p-introduce">電子商取引の配送、業務用輸送、倉庫保管および取り扱い</p>
                            </div>
                        </div>
                        <div className="box-staff">
                            <div className="box-staff-img">
                                <img src="//theme.hstatic.net/200000472237/1000829412/14/staff_avatar2.jpg?v=481" alt="Hệ thống Auto-Sorting" />
                            </div>
                            <div className="box-staff-desc">
                                <h3>自動仕分けシステム</h3>
                                <p className="p-introduce">ベトナムで最初の 2 つの 100% 自動仕分けシステムを誇らしげに所有</p>
                            </div>
                        </div>
                        <div className="box-staff">
                            <div className="box-staff-img">
                                <img src="//theme.hstatic.net/200000472237/1000829412/14/staff_avatar3.jpg?v=481" alt="Chính sách ưu đãi hấp dẫn" />
                            </div>
                            <div className="box-staff-desc">
                                <h3>魅力的な優遇政策</h3>
                                <p className="p-introduce">無料ピックアップ、無料ピックアップ、無料再配送、チャージした Fast-Delivery コインで最大 6% のキャッシュバック</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hiring">
                <div className="containerHiring">
                    <div className="col-left">
                        <div className="s-abouttitle">
                            <h2 className="lastTitle"> 私たちに参加したいですか？</h2>
                            <p className="p-introduce">Fast-Deliveryにはいつでもチャンスがあります。 エキサイティングな機会を探り、私たちのチームに参加してください。</p>
                        </div>
                        <a className="get-in-touch" href="https://Fast-Delivery.vn/blogs/tuyen-dung">
                            <span className="icon">
                                <ImMail4 className='w-full' />
                            </span>
                            <span>キャリアの機会を探している</span>
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
