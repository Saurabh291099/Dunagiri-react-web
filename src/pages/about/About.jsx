import React from 'react'
import Quotes from '../../components/Quotes'

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-wrapper">
          <h2>ABOUT US</h2>
          <p>
            <strong>Dunagiri Retreat</strong> offers freedom from the madness and pressures of modern life. We offer a space where reflection and refreshment of the soul take place as people leave their busy routines behind. Meant for nature lovers and spiritual seekers who value peace, and appreciate the natural grandeur of their surroundings, your stay with us will leave you refreshed, renewed, and uplifted.</p>
          <p>Inspired by the idea that it’s love and not money that makes the world go around, Piyush Kumar founded <strong>Dunagiri Retreat</strong> in 2005 after leaving a lucrative career at the World Bank. He wanted to create a different kind of resort—one that benefits the ecology and the local population as much as it does the visitor. As a result, <strong>Dunagiri Retreat</strong> is entirely served by the villagers of this area; everyone working here is a farmer and a resident of the three villages that surround us. And together—visitor and villager alike—we attempt to realize the four guiding principles that form the heart of <strong>Dunagiri Retreat</strong>:</p>
          <ul>
            <li>To generate sustainable livelihoods with dignity for residents;</li>
            <li>To supplement educational resources of the area;</li>
            <li>To provide primary and preventive healthcare to residents and;</li>
            <li>To examine how - from stones to insects to plants, humans, and birds – how can we all joyously coexist together as we believe it is possible.</li>
          </ul>
          <p>During your stay here, we pray you will discover all of the reasons that make <strong>Dunagiri Retreat</strong> such a special place—from its ancient and sacred history to its pristine natural beauty, and the positive influence of your visit on the local population. You will arrive as a guest, but leave as family having discovered “the road less traveled," as Robert Frost expressed, has made all the difference.</p>
        </div>
        <div className="quote-div">
          <Quotes />
        </div>

        <div className="retreats-div">
          <h2>The Retreat</h2>
          <p><strong>Dunagiri Retreat</strong> offers a "rustic-deluxe" experience—modern facilities within very remote and rural surroundings in the Himalayan wilderness. While maintaining a close relationship with nature, your comfort is our utmost concern. Our hospitality is genuine and refined—yet down to earth. Pure deshi. Right down to the fresh cow’s milk, naturally sweet from its diet of mountain herbs. </p>
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <span>Organic Farm-Fresh Meals</span>
              </div>
              <div class="col">
                <span>Fireside Dining & Conversations</span>
              </div>
              <div class="col">
                <span>Inspiring Walks & Hikes</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <span>Natural Spring Drinking Water</span>
              </div>
              <div class="col">
                <span>Modern Bath Facilities</span>
              </div>
              <div class="col">
                <span>Hot Showers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
