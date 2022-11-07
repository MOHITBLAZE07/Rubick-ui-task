import React from 'react'
import './Home.css'
import image from '../../assets/14.jpg';


export default function Home() {
  return (
    <>
      <main>
        <section>
            <div className="content-section">
                <h2>Brands to <span className="text-blue">Multi Brand Retailers and Distributers </span></h2>
                <p>Rubick platform provides cataloguing solutions for all in the global multiverse marketplace. Weather you are a convenient store wanting to sell online or an international brand wanting to sell across geographies and languages, Rubick is your central place to manage your product information.</p>
            </div>
            <div>
                {/* <img src="https://via.placeholder.com/600x400"/> */}
                <img src={image} alt='logo'/>
            </div>
        </section>
        <section>
            <div>
                {/* <img src="https://via.placeholder.com/600x400"/> */}
                <img src={image} alt='logo'/>
            </div>
            <div className="content-section">
                <h2><span className="text-blue">Single source</span> of truth</h2>
                <p>As brands and retailers grow, their data exists in different environments. Data in silos, pose a challenge for brands to make data-driven decisions. Modern brands are now moving towards a single source of truth models like rubick to overcome this challenge.</p>
            </div>
        </section>
    </main>

    <div className="main-offer-section">
        <section className="offer-section">
            <div className="content-section">
                <h2>What we offer</h2>
                <p>In Rubick you can easily store and manage product related master data records of your customers with impressive features for customer data management, segmentation, and marketing automation. </p>
                <p>By aggregating customer activities from different source systems, the Rubick platform, provides a consistent and unified view of all related data for your catalogs.</p>
            </div>
            <div>
                <img src={image} alt='logo'/>
                {/* <img src="https://via.placeholder.com/600x400" alt='placeholder'/> */}
            </div>
        </section>
    </div>

    <div className="cta">
        <div className="column-1">Stay <br/><span  className="text-blue">Informed</span></div>
        <div className="column-2">
            <p>Subscribe to get Rubick’s news via email or follow us on social <br/>media. Receive premium content, such as white papers,<br/> insights, and more. Unsubscribe at any time.</p>
            <div>
                <input type="text"/>
                <button style={{fontWeight: '700px' }}>Subscribe</button>
            </div>
        </div>    
    </div>
    </>
  )
}
