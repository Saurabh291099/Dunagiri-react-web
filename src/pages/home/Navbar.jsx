import React from 'react'
import { Link } from "react-router-dom";
import '../Style/NavFoot.css'
const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='container '>
          <div className="row navbar-wrapper">
            <div className='col-lg-3'>
              <img src="" alt="logo" />
            </div>
            <div className="col-lg-9 nav-links">
              <ul>
                <li>Explore</li>
                <li>
                  <Link className='luxury-link'>Luxury getways</Link>
                </li>
                <li>
                  <Link>List your property</Link>
                </li>
                <li><Link>+91 975614****</Link></li>
                <li>
                  <Link className='nav-login'>
                    <svg class="NewHeader_c-new_header__navItemIcon__ZY2wp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill="#fff" d="M15,30a15,15,0,1,1,10.61-4.39A14.93,14.93,0,0,1,15,30Zm-.31-14.71A5.7,5.7,0,0,0,9,20.84v.34a1.5,1.5,0,0,0,.44,1.06,1.46,1.46,0,0,0,1.05.44h8.4a1.5,1.5,0,0,0,1.5-1.5v-.34a5.7,5.7,0,0,0-5.7-5.55Zm0-7.79A3.48,3.48,0,0,0,11.2,11a3.49,3.49,0,0,0,6,2.47,3.5,3.5,0,0,0-2.48-6Z"></path></svg>
                    login
                  </Link>


                </li>
                {/* <li><svg class="NewHeader_c-new_header__navItemIcon__ZY2wp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path fill="#fff" d="M15,30a15,15,0,1,1,10.61-4.39A14.93,14.93,0,0,1,15,30Zm-.31-14.71A5.7,5.7,0,0,0,9,20.84v.34a1.5,1.5,0,0,0,.44,1.06,1.46,1.46,0,0,0,1.05.44h8.4a1.5,1.5,0,0,0,1.5-1.5v-.34a5.7,5.7,0,0,0-5.7-5.55Zm0-7.79A3.48,3.48,0,0,0,11.2,11a3.49,3.49,0,0,0,6,2.47,3.5,3.5,0,0,0-2.48-6Z"></path></svg></li> */}
              </ul>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar
