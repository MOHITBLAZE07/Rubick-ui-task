import React from 'react'
import './product.css';
import pic from '../../assets/7.jpg';
import image from '../../assets/14.jpg';

function Product() {
  return (
    <div className='product'>
      <div className='section-1'>
        <div className="heading-1">Introducing
            <span className="text-blue">Rubick.Ai</span>
        </div>
        <div>
          <p>A one stop platform to create, edit, check, manage, analyze and publish all aspects of product information data for multiple online and offline destinations</p>
        </div>
        <div>
          {/* <img src="https://via.placeholder.com/700x400" alt='placeholder'/> */}
          <img src={image} alt='placeholder' style={{height:'500px'}}/>
        </div>
        <div className='button'>
          <button>A.I. engine</button>
        </div>
      </div>

      <div className='section-2'>
        <div className='product_section-2_left'>
          <div>
            <h1>Why Rubick.Ai ?</h1>
            <p>            <p>
            Rubick’s smart workflow engines, A.I. technologies, domain knowledge and integrations with third party softwares creates a platform that reduces the time and effort required to build retail cataloges. 
            </p><br/>
            <p>The 5 elements of Rubick will reduce the time taken for manual cataloguing by 50%, while opening up newer solutions in analytics, information and experience management</p></p>

          </div>
        </div>
        <div className='product_section-2_right'>
          <img src={pic} alt='placeholder' style={{filter: `blur(2px)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'

          }}/>
        </div>
      </div>

      <div className='section-3'>
        <div className="heading-2">
          <span className='text-blue'>Rubick.Ai</span>
          <span>workflow</span>
        </div>
        <div>
          <p>The following workflow gives us an insight of how product enrichment happens from sourcing till publishing at Rubick.Ai.</p>
        </div>
        <div>
          {/* <img src="https://via.placeholder.com/700x400" alt='placeholder'/> */}
          <img src={image} alt='placeholder' style={{height:'400px'}}/>
        </div>
      </div>
      <div className='section-4'>
        <div className='container'>
          <div className='content-1'>
            <div>Rubick Bible</div>
            <div>
              <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
              <p>
                A global database for all products that are online
                </p>
            </div>
          </div>
          <div className='content-2'>
          <div>Rubick Atlas</div>
            <div>
              <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
              <p>
              Master guide that enables standardization of cataloging terminology and taxonomy between different listing destinations


                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product