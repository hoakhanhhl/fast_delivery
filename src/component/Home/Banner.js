import React from 'react'
function Banner() {
    return (
        <div className="banner-home">
            <div className="title-banner-home">
                <h2>より速い配達 6 時間</h2>
                <p>Fast-Delivery は、他の運送会社よりも 6 時間早く商品を受取人に届けるのに役立ちます。</p>
            </div>
            <video playsInline autoPlay loop muted className="video-home-1">
                <source type="video/mp4" src="https://file.hstatic.net/1000376681/file/1920x900_d8d881b358674809a162eb6b6069ff10.mp4" />
            </video>
        </div>
    )
}


export default Banner;