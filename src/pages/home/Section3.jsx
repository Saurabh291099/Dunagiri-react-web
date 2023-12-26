import React from 'react'
import founderImg from '../Assests/Images/founderimg.webp'
import { Link } from 'react-router-dom'
const Section3 = () => {
    return (
        <>

            <div className="number-section">
                <div className="container">
                    <div className="number-div">
                        <p>OUR NUMBERS SPEAK FOR THEMSELVES</p>
                        <h2>Guests Experience Lasting Benefits</h2>
                        <div className="row counters-div">
                            <div className="col">
                                <h3>30%</h3>
                                <p>Decrease in anxiety while staying at Dunagiri Retreat.</p>
                            </div>
                            <div className="col">
                                <h3>26%</h3>
                                <p>Improvement in sleep during and post visit.</p>
                            </div>
                            <div className="col">
                                <h3>16%</h3>
                                <p>Improvement in self-compassion after a 5-night stay.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-third">
                <div className="container">


                    <div className="row founder-div">
                        <div className="col-md-8 col-lg-8 founder-details-div">
                            <h2>Meet Our Founder <br />
                                Piyush Kumar</h2>
                            <p>Guided by the philosophy that love transcends monetary value, Piyush Kumar, a former World Bank professional, established Dunagiri Retreat in 2005. His vision was to create a retreat that harmonizes with nature and nurtures the local community, fostering a unique synergy between guests and villagers under the retreat's guiding principles.</p>
                            <div className="social-icons">
                                <Link className='social-link'><i class="fa-brands fa-linkedin-in"></i></Link>
                                <Link className='social-link'><i class="fa-brands fa-instagram"></i></Link>
                                <Link className='social-link'><i class="fa-brands fa-facebook"></i></Link>
                            </div>
                            <div className='my-4'>
                                <button className='activity-btn'>about us</button>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-4 founder-imf-div">
                            <img src={founderImg} alt="founder Img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3
