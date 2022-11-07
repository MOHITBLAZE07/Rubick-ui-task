import React from 'react';
import './Features.css';
import image from '../../assets/14.jpg';

export default function Features() {
  return (
    <div>
        <div className='first-content'>
          <h2 className='heading'>Rubick.Ai components</h2>
          <div className="main-container">
            
              <div className="sub-container-1">

                <div className='content-1 contents-left'>
                  <div>PIM</div>
                  <div>
                    <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
                    <p>
                    Manage centralized Product Information
                      </p>
                  </div>
                </div>
                <div className='content-1 contents-left'>
                  <div>DAM</div>
                  <div>
                    <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
                    <p>
                    A global database for all products that are online
                      </p>
                  </div>
                </div>
                <div className='content-1 contents-left'>
                  <div>Case management</div>
                  <div>
                    <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
                    <p>
                    Allows Suppliers to provide work items to the partner for work.
                      </p>
                  </div>
                </div>
                <div className='content-1 contents-left'>
                  <div>BI</div>
                  <div>
                    <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
                    <p>
                    BI guides on the effect of each product lines across markets
                      </p>
                  </div>
                </div>

              </div>
              <div className="sub-container-2">
              <div className='content-1 contents-right'>
                  <div>PXM</div>
                  <div>
                    <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
                    <p>
                    From Translation to Image Editing, tools to better user experience
                      </p>
                  </div>
                </div>
                <div className='content-1 contents-right'>
                  <div>Markets</div>
                  <div>
                    <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
                    <p>
                    Register Markets and publish information directly into Markets.
                      </p>
                  </div>
                </div>
                <div className='content-1 contents-right'>
                  <div>SCM</div>
                  <div>
                    <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
                    <p>
                    Manage inventory of Product lines across warehouses
                      </p>
                  </div>
                </div>
                <div className='content-1 contents-right'>
                  <div>EPC</div>
                  <div>
                    <img src="https://via.placeholder.com/70x70" alt='placeholder'/>
                    <p>
                    Enhance your products content and share samples across multiple domains  
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <main className='features'>
          <h2>A Product Information Management UI in Rubick.Ai</h2>
          <section>
              <div>
                  {/* <img src="https://via.placeholder.com/600x400" alt='image'/> */}
                  <img src={image} alt='image'/>
              </div>
              <div className="content-section">
                  <ul>
                    <li>Rubick provides high-quality clean and trusted data with enterprise-class data quality and data governance that scales.</li>
                    <li>With web-based user interface and context-sensitive drag & drop operations, Rubick makes working with product information more efficient.</li>
                  </ul>
              </div>
          </section>
          <h3>Image edit UI in Rubick.Ai</h3>
          <section>
              <div className="content-section">
                  <ul>
                    <li>Rubick’s interactive user interface provides users with common image editing actions. The editor helps to scale internal operations by reducing dependency on simple tasks.</li>
                    <li>It provides a variety of tools to provide additional functionality for users. Common actions like resizing, adjusting, resetting, rotating, and more allow manual review and editing of image assets when needed.</li>
                  </ul>
              </div>
              <div>
                  {/* <img src="https://via.placeholder.com/600x400"/> */}
                  <img src={image} alt='image'/>
              </div>
          </section>
          <h3>A Batch Interface UI in Rubick.Ai</h3>
          <section>
              <div>
                  {/* <img src="https://via.placeholder.com/600x400"/> */}
                  <img src={image} alt='image'/>
              </div>
              <div className="content-section">
                  <ul>
                    <li>The Rubick system in various places will enable catalogers to view the status of multiple products together giving spreadsheet-like superpowers on a web console.</li>
                    <li>Powered with real-time analytics of mission data, the catalogers will be informed of the task in hand in advance, and get real time updates of the process of data collation.</li>
                  </ul>
              </div>
          </section>
          <h3>Sourcing web data using Rubick.Ai</h3>
          <section>
              <div className="content-section">
                  <ul>
                    <li>The Rubick system will make it very convenient to crawl the internet for relevant product information. This will dramatically reduce the time-to-market for sellers.</li>
                    <li>An effective AI engine which is trained to understand NLP and Image analytics enables the system to assess the website and source data as per the needs of the retail industry. </li>
                  </ul>
              </div>
              <div>
                  {/* <img src="https://via.placeholder.com/600x400"/> */}
                  <img src={image} alt='image'/>
              </div>
          </section>
        </main>
    </div>
  )
}
