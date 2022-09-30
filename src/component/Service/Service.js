import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="container">
                <h2> Single Item</h2>
                <Slider ref={c => (this.slider = c)}{...settings}>
                    <div>
                        <h3 className="bg-black mr-40 ">1</h3>
                    </div>
                    <div>
                        <h3 className="bg-orange mr-40">2</h3>
                    </div>
                    <div>
                        <h3 className="bg-black mr-40">3</h3>
                    </div>
                    <div>
                        <h3 className="bg-orange mr-40">4</h3>
                    </div>
                    <div>
                        <h3 className="bg-black mr-40">5</h3>
                    </div>
                    <div>
                        <h3 className="bg-orange mr-40">6</h3>
                    </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                    <button className="text-orange bg-slate-600 px-5 mr-60" onClick={this.previous} >
                        Previous
                    </button>
                    <button className="text-orange bg-slate-600 px-5 mr-60" onClick={this.next}>
                        Next
                    </button>
                </div>
            </div>
        );
    }
}