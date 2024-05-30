import React, { useState } from 'react'
import FancyCarousel from 'react-fancy-circular-carousel';
import 'react-fancy-circular-carousel/FancyCarousel.css';
import './CircleCompo.css'
import InfoOne from './InfoOne';
import InfoTwo from './InfoTwo';
import InfoThird from './InfoThird';
import InfoFour from './InfoFour';
import { Link } from 'react-router-dom';

import image1 from '../../../src/assets/one.jpg';
import image2 from '../../../src/assets/one.jpg';
import image3 from '../../../src/assets/one.jpg';
import image4 from '../../../src/assets/one.jpg';

export default function App() {
   const [focusElement, setFocusElement] = useState(0);

   const images = [image1, image2, image3, image4];
   const info = [<InfoOne />, <InfoTwo />, <InfoThird />, <InfoFour />];
   return (
      <>
         <h2 className="text-center mt-3" style={{ fontFamily: 'cursive', fontSize: '2.5em', fontWeight: 'bold', color: '#00203FFF', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
            Welcome to <span style={{ color: "#00203FFF" }}>SNEAK</span> <span style={{ color: "green" }}>SMART</span>
         </h2>
         <p className='text-center' style={{ fontSize: '1.2em', fontStyle: 'italic', color: '#6c757d', marginTop: '10px' }}>
            Start your learning career now
         </p>
         <div className='carousel'>
            <div className='main'>
               <FancyCarousel images={images} setFocusElement={setFocusElement} carouselRadius={200}
                  peripheralImageRadius={40}
                  centralImageRadius={50}
                  focusElementStyling={{ border: '2px solid black' }}
                  autoRotateTime={3}
                  borderWidth={4}
                  borderHexColor={'1c364f'} />
               <div className="info-box-wrapper">
                  <p> {info[focusElement]} </p>
               </div>
            </div>
            {/* <div className='temp'>shfgewf</div>
         <div className='temp'>jhfgwef</div>
         <div className='temp'>sjfgsef</div>
         <div className='temp'>efgewf</div>
         <div className='temp'>ysfgef</div>
         <div className='temp'>ayfgefef</div> */}
         </div>
      </>
   )
}
