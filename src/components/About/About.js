import './About.css';

import React from 'react'
import subhajit from '../../assets/8.png';
import kiran from '../../assets/9.png';
import hena from '../../assets/10.png';
import jeeva from '../../assets/11.png';
import mahesh from '../../assets/12.png';
export default function About() {
  return (
    <div className='main'>
        <div className="heading-1">Our
            <span className="text-blue">management</span>
        </div>
        <div className='section-1'>
            <div>
                <div>
                    {/* <img src="https://via.placeholder.com/1000x1100" alt='placeholder'/> */}
                    <img src= {subhajit} alt="image" />
                    <span>
                        <h3>Subhajit Mukherjee</h3>
                        <p>Co-founder & CEO</p>
                    </span>
                </div>
                <p><i>Subhajit has a B.E. in telecommunications from SMIT and an executive diploma in delivery management from ISB/Accenture Management Academy. His expertise is in application outsourcing and business operations, and he credits his business understanding to the wide range of portfolios he got the chance to work in during his tenure in Accenture and Dell.</i></p>
            </div>
            <div>
            <div>
                    {/* <img src="https://via.placeholder.com/1000x1100" alt='placeholder'/> */}
                    <img src= {kiran} alt="image" />
                    <span>
                        <h3>Kiran Ramakrishna</h3>
                        <p>Co-founder & CEO</p>
                    </span>
                </div>
                <p><i>Kiran Ramakrishna has been living in Paris, London and Durham since 2011, before he decided to move back to India in 2015 to start Text Mercato. He has been in the content industry for about 10 years now and has managed delivery in 23 languages for global brands such as Expedia, Groupon, L’Oréal and many more. He helped started and run two companies prior to Text Mercato, Oboulo.com (Bangalore, India) and Edit-place (London, UK).</i></p>
            </div>
        </div>
        <div className="heading-2">Our
            <span className="text-blue">team</span>
        </div>
        <div className='section-2'>
            <div>
                {/* <img src="https://via.placeholder.com/1000x1000" alt='placeholder'/> */}
                <img src= {hena} alt="image" />
                <span>
                    <h4>Hena Zea Azmi</h4>
                    <p>Product Owner</p>
                </span>
            </div>
            <div>
                {/* <img src="https://via.placeholder.com/1000x1000" alt='placeholder'/> */}
                <img src= {jeeva} alt="image" />
                <span>
                    <h4>Jeeva Subramanian</h4>
                    <p>QA Lead</p>
                </span>
            </div>
            <div>
                {/* <img src="https://via.placeholder.com/1000x1000" alt='placeholder'/> */}
                <img src= {mahesh} alt="image" />
                <span>
                    <h4>Mahesh V N</h4>
                    <p>Senior MERN Developer</p>
                </span>
            </div>
        </div>
    </div>
  )
}
