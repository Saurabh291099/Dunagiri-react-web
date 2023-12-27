import React from 'react'
import SectionImage from './SectionImage'
import Slider from "react-slick";




import image from '../Assests/Images/image.webp'
// import image1 from '../Assests/Images/image1.webp'
import image2 from '....//Assests/Images/image2.webp'
import image3 from '../Assests/Images/image3.webp'
import image4 from '../Assests/Images/image4.webp'
import image5 from '../Assests/Images/image5.webp'
import image6 from '../Assests/Images/image6.webp'
import image7 from '../Assests/Images/image7.webp'
import image8 from '../Assests/Images/image8.webp'

const Section2 = (props) => {

    const imageData = [
        { imgUrl: image },
        { imgUrl: image2 },
        { imgUrl: image3 },
        { imgUrl: image4 },
        { imgUrl: image5 },
        { imgUrl: image6 },
        { imgUrl: image7 },
        { imgUrl: image8 },
    ]

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        autoplay: true,
        slidesToShow: 3,
        speed: 500,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div className="section-wrapper">
                <div className="container second-section-div">

                    <h2>Experience Mahavatar Babaji Cave, breathtaking hikes, and pristine wilderness.</h2>

                    <Slider {...settings}>
                        {imageData.map((data) => {
                            return (
                                <div className='second-slider'>
                                    <SectionImage imgUrl={data.imgUrl} />
                                </div>
                            )
                        })}
                    </Slider>

                    <div className="btn-div">
                        <button className='activity-btn'>ACTIVITIES</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2
