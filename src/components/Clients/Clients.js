import React from 'react'
import './Clients.css';
import amazon from '../../assets/amazon.jpg';
import meesho from '../../assets/meesho.jpg';
import myntra from '../../assets/myntra.jpg';
import nykaa from '../../assets/nykaa.png';


function Clients() {
  return (
    <div className='clients'>
      <div className='section-1'>
        <div className="heading-1">How
            <span className="text-blue">&nbsp;Rubick.Ai&nbsp;</span>
            helps customers ?
        </div>
        <div className="main-container">
          <div className="sub-container-1">
              <div className="contents-left">
                <i>How can e-commerce players get buyers and sellers in their platform to improve visibility of the products for better buying and selling decisions?</i>
              </div>
              <div className="contents-left">
                <i>How malls can make the digital presence more customer centric?</i>
              </div>
              <div className="contents-left">
                <i>How can you manage the entire lifecycle of your product on one platform ?</i>
              </div>
              <div className="contents-left">
                <i>How important is effective seller onboarding and quality control process ?</i>
              </div>
          </div>
          <div className="sub-container-2">
              <div className="contents-right">
                <i>An insight for the sellers to search and understand customer behaviour trends so that they can create accurate product information that will keep them relevant against competitors and help them to list their products faster.</i>
              </div>
              <div className="contents-right">
                <i>Value addition in terms of listing products with digital catalogues that can be used for digital shelves</i>
              </div>
              <div className="contents-right">
                <i>Gather information and insights from product analytics to create relevant listings and share across multiple online platforms from one place</i>
              </div>
              <div className="contents-right">
                <i>Smooth onboarding process and quality control ensures trust in the product and helps build business growth thereby increasing revenue, customer lifetime value and reducing customer churn rate</i>
              </div>
          </div>
        </div>
 
      </div>

      <div className='section-2'>
        <h1 className='heading'>Our Customer Segments</h1>
        <div className='content-0'>
          <span>
          <h1>Enterprise Customers</h1>
          <i>Online retailers and E-Commerce players, large brands and sellers</i>
          <h3>Some of our clients</h3>
          <div>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={amazon} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={meesho} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={myntra} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={nykaa} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={amazon} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={meesho} alt='placeholder'/>

          </div>
          </span>
        </div>
        <div className='content-1'>
        <span>
          <h1>Enterprise Marketplaces</h1>
          <i>Multi and speciality<br/> marketplaces</i>
          <h3>Some of our clients</h3>
          <div>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={amazon} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={meesho} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={myntra} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={nykaa} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={amazon} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={meesho} alt='placeholder'/>

          </div>
          </span>
        </div>
        <div className='content-2'>
        <span>
          <h1>Medium to small retailers</h1>
          <i>All retailers from brands to sellers to manufacturers</i>
          <h3>Some of our clients</h3>
          <div>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={amazon} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={meesho} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={myntra} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={nykaa} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={amazon} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={meesho} alt='placeholder'/>

          </div>
          </span>
        </div>
        <div className='content-3'>
        <span>
          <h1>Retail<br /> enablers</h1>
          <i>Offline<br /> marketplaces </i>
          <h3>Some of our clients</h3>
          <div>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={amazon} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={meesho} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={myntra} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={nykaa} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={amazon} alt='placeholder'/>
            {/* <img src="https://via.placeholder.com/70x70" alt='placeholder'/> */}
            <img src={meesho} alt='placeholder'/>

          </div>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Clients