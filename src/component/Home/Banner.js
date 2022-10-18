import React from 'react'
function Banner() {
    return (
        <div className="banner-home">
            <div className="title-banner-home">
                <h2>Giao nhanh hơn 6 tiếng</h2>
                <p>GHN giúp bạn giao hàng đến người nhận nhanh hơn 6 tiếng so với các đơn vị vận chuyển khác.</p>
            </div>
            <video autoPlay loop className="video-home-1">
                <source type="video/mp4" src="https://file.hstatic.net/1000376681/file/1920x900_d8d881b358674809a162eb6b6069ff10.mp4" />
            </video>
        </div>
    )
}


export default Banner;