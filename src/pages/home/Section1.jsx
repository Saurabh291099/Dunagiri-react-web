import React from 'react'
import FeatureCard from './FeatureCard'
import featurelogo from '../../assets/images/logo-cnntravel.webp'
import  './home.css'

import Slider from "react-slick";
const Section1 = (props) => {

    const featureCardData = [
        { imgUrl: featurelogo, heading: '"(Dunagiri Retreat) A place of warmth, bliss, solitude, and delicious food!"', link: '', linkText: 'Ri, Tripadvisor' },
        { imgUrl: featurelogo, heading: '"Time and global warming notwithstanding, the stories frame Dunagiri, a place lush with natural and mythological lore."', link: '', linkText: 'Disha, Outlook Traveller' },
        { imgUrl: featurelogo, heading: '"Glittering peaks and vivid landscapes create an environment that can calm the most unsettled of hearts."', link: '', linkText: 'Jini Reddy, CNN Travel' },
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
    };
    return (
        <>
            <div className="container">

                <div className="feature-div">
                    <h2>As Featured In</h2>
                    <Slider {...settings}>

                        {featureCardData.map((data) => {
                            return (
                                <div className='feature-slider'>
                                    <FeatureCard imgUrl={data.imgUrl} heading={data.heading} linkText={data.linkText} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>

            <div className="second-div">
                <div className="container">
                    <div className="row second-inner">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <h2> Reconnect with your mind and body.</h2>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <p>
                                “Keep close to Nature's heart...and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean.”</p>
                            <hr className='break-line'/>
                            <span>John Muir</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1
