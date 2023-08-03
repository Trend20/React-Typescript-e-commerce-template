import React from 'react'
import { Link } from 'react-router-dom'
import { information, pages} from "../../assets/data/footer";
import {FaPhone, FaTwitter, FaYoutube, FaInstagram, FaPinterest} from 'react-icons/fa'
import { HiMail} from 'react-icons/hi'
import { TiLocation} from 'react-icons/ti'
import { BiLogoFacebookSquare} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="information">
          <h3>INFORMATION</h3>
          {
              information.map((info) =>{
                  return(
                      <Link to={info.link}>{info.title}</Link>
                  )
              })
          }
      </div>
        <div className='pages'>
            <h3>PAGES</h3>
            {
                pages.map((page) =>{
                    return(
                        <Link to={page.link}>{page.title}</Link>
                    )
                })
            }
        </div>
        <div className='contact'>
            <h3>CONTACT US</h3>
            <div className="contact-info">
                <p><i><TiLocation /></i> 4578 Marmora Road, Glasgow</p>
                <p><i><FaPhone /></i> 123-456-7890</p>
                <p><i><HiMail /></i> info@demolink.org</p>
            </div>
        </div>
        <div className='follow'>
            <h3>FOLLOW US</h3>
            <div className="subscribe">
                <input type="email" placeholder='Enter your email'/>
                <button>subscribe</button>
            </div>
            <div className="social-icons">
                <i><BiLogoFacebookSquare /></i>
                <i><FaTwitter /></i>
                <i><FaYoutube /></i>
                <i><FaInstagram /></i>
                <i><FaPinterest /></i>
            </div>
        </div>
    </div>
  )
}

export default Footer;