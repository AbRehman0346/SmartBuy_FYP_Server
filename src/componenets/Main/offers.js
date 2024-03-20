import React from 'react'
import ImgOffer1 from '../../img/offer-1.png'
import ImgOffer2 from '../../img/offer-2.png'
import { Link } from 'react-router-dom'

function Offers() {
  return (
    <div className='container-fluid offer pt-5 '>
      <div className='row px-xl-5'>
        <div className='col-md-6 pb-4'>
          <div className='position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5'>
            <img src={ImgOffer1} alt='' />
            <div className='position-relative' style={{ zIndex: 1 }}>
              <h5 className='text-uppercase primary-color mb-3'>
                20% off the all order
              </h5>
              <h1 className='mb-4 font-weight-semi-bold'>Spring Collection</h1>
              <Link className='ubtn-primary py-md-2 px-md-3'>Shop Now</Link>
            </div>
          </div>
        </div>
        <div className='col-md-6 pb-4'>
          <div className='position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5'>
            <img src={ImgOffer2} alt='' />
            <div className='position-relative' style={{ zIndex: 1 }}>
              <h5 className='text-uppercase primary-color mb-3'>
                20% off the all order
              </h5>
              <h1 className='mb-4 font-weight-semi-bold'>Winter Collection</h1>
              <Link className='ubtn-primary py-md-2 px-md-3'>Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
