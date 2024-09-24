

import React from "react";
import Image from 'next/image';
import '@styles/common/footer/Footer.css'

import linkedin from '@public/assets/Images/common/footer/linkedin (2).png';
import facebook from '@public/assets/Images/common/footer/facebook.png';
import instagram from '@public/assets/Images/common/footer/instagram (2).png';
import twitter from '@public/assets/Images/common/footer/twitter (1).png';
import behance from '@public/assets/Images/common/footer/behance.png';
import WhiteLogo from '@public/assets/Images/common/header/whiteLogo.png';
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* <div className="footer-container-contents">

          <div className="footer-content">
            <div className="footer-content-heading"><h2>Solutions</h2></div>
            <div className="footer-content-text"><p>UI/UX Audit</p></div>
            <div className="footer-content-text"><p>Research & Design</p></div>
            <div className="footer-content-text"><p>Market Analysis</p></div>
            <div className="footer-content-text"><p>Strategy & Automation</p></div>
            <div className="footer-content-text"><p>Data Visualization</p></div>
            <div className="footer-content-text"><p>Dynamic Interaction <br />Ecosystem (Beta)</p></div>
          </div>

          <div className="footer-content">
            <div className="footer-content-heading"><h2>Resource</h2></div>
            <div className="footer-content-text"><Link href="/blogs"> <p>Blogs</p></Link></div>
            <div className="footer-content-text"><p>Trending</p></div>
            <div className="footer-content-text"><p>Insights & Reports</p></div>
            <div className="footer-content-text"><p>trafy Community</p></div>
            <div className="footer-content-text"><p>trafy Events</p></div>
          </div>

          <div className="footer-content">
            <div className="footer-content-heading"><h2>Academy</h2></div>
            <div className="footer-content-text"><p>Certification Courses</p></div>
            <div className="footer-content-text"><p>Webinars</p></div>
            <div className="footer-content-text"><p>Masterclass</p></div>
            <div className="footer-content-text"><p>Hackathon</p></div>
          </div>

          <div className="footer-content">
            <div className="footer-content-heading"><h2>Company</h2></div>
            <div className="footer-content-text"><p>Our Story</p></div>
            <div className="footer-content-text"><p>Careers</p></div>
            <div className="footer-content-text"><p>Investor Relation</p></div>
            <div className="footer-content-text"><p>Customer Stories</p></div>
            <div className="footer-content-text"><p>Sustainability </p></div>
            <div className="footer-content-text"><p>Giving back to you</p></div>
          </div>

          <div className="footer-content">
            <div className="footer-content-heading"><h2>Compliance</h2></div>
            <div className="footer-content-text"><Link href="/terms-of-service"> <p>Terms of Service</p> </Link></div>
            <div className="footer-content-text"><Link href="/privacy-policy"><p>Privacy Policy</p></Link></div>
            <div className="footer-content-text"><p>Anti-Spam Policy</p></div>
            <div className="footer-content-text"><Link href="/cookie-policy"><p>Cookie Policy</p></Link></div>
            <div className="footer-content-text"><Link href="/refund-policy"><p>Refund Policy</p></Link></div>
            <div className="footer-content-text"><p>Freelancers & Affiliate Policy</p></div>
          </div>

        </div> */}

        {/* <hr className="footer-line" /> */}

        <div className="social-section">
          {/* <div className="footer-logo"><Image src={WhiteLogo} alt="trafy logo" width={77.612} height={32} /></div> */}
          <div className="footer-content">
            <div className="footer-content-text"><Link href="/terms-of-service"> <p>Terms of Service</p> </Link></div>
            <div className="footer-content-text"><Link href="/privacy-policy"><p>Privacy Policy</p></Link></div>
            <div className="footer-content-text"><Link href="/cookie-policy"><p>Cookie Policy</p></Link></div>
            <div className="footer-content-text"><Link href="/refund-policy"><p>Refund Policy</p></Link></div>
          </div>
          <div className="socials">
           <a href="https://www.linkedin.com/company/trafyai"><Image src={linkedin} alt="linkedin" /></a>
            <a href="https://www.facebook.com/trafyai"><Image src={facebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/trafyai"><Image src={instagram} alt="instagram" /></a>
            <a href="https://twitter.com/trafyai"><Image src={twitter} alt="twitter" /></a>
            <a href="https://www.behance.net/trafy"><Image src={behance} alt="behance" /></a>
          </div>
        </div>

        <div className="copyrights">
          <div className="footer-logo"><Image src={WhiteLogo} alt="trafy logo" width={77.612} height={32} /></div>
          <div className="copyright-text">© 2024 trafy.
             {/* | <span>Commitments</span> */}
             </div>
        </div>

      </div>
    </footer>
  )
}
export default Footer;
