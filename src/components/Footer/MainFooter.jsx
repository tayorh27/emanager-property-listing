import React from 'react'
import styled from 'styled-components'
import logo from '../../DASHBOARD/assets/dashlogo.png'
import { Link } from 'react-router-dom'
import { IoLogoTwitter } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const MainFooter = () => {
  const footerLinks = [
    {
      name : 'About Us',
      path : "/about"
    },
    {
      name : 'Terms & Condition',
      path : "/terms",
    },
    {
      name : 'Privacy Policy',
      path : "/privacy"
    },
    {
      name : 'FAQs',
      path : "/faqs"
    },
    {
      name : 'Contact Us',
      path : "contactus"
    }
  ]

  const socialLinks = [
    {
      icon : <IoLogoTwitter/>
    },
    {
      icon : <AiFillInstagram/>
    },
    {
      icon : <FaFacebookF/>
    },
    {
      icon : <FaLinkedinIn/>
    }
  ]

  return (
    <FooterStyle>
      <div className="top flex flex-col gap-[2rem] text-center">
        <div className="logo flex items-center justify-center">
          <img src={logo} alt="logo image" />
          <div className="title">E-Manager</div>
        </div>
        <div className="links w-full flex justify-center flex-wrap gap-[3rem] px-3 items-center">
          {footerLinks.map((link) => {
            return (
              <Link to={link.path} key={link.path}>
                <span>{link.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="below w-[100%] px-10 flex pt-5 justify-between">
        <div className="copyrights">
          <small> &copy; 2023 E-Manager. All Rights Reserved.</small>
        </div>
        <div className="social-links flex gap-6 items-center flex-wrap">
          {socialLinks.map((link) => {
            return (
              <Link key={link} to='' target='_blank' className='border px-2 py-2 rounded-[5px]' rel='noreferrer noopener'>
                <span className='social text-[1rem] hover:text-[#132B58]'>{link.icon}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  background : #132B58;
  color : white;
  padding-top : 1rem;
  padding-bottom : 1.5rem;
  width: 100%;
  position : relative;

  .top{
    padding-bottom : 5rem;
    padding-top : 2rem;
    position : relative;

    .logo{
      position : relative;
      justify : center;
      width: 13%;
      align-items : center;
      margin-inline : auto;
      display : flex;
      gap : 5px;
      background-color : white;
      padding : 0.5rem ;
      border-radius : 8px;

      .title {
        color : blue;
        text-transform : uppercase;
        font-size : 0.75rem;
        letter-spacing : 3px;
      }
    }

    &::after{
      content : '';
      width: 100%;
      bottom : 0;
      left :0;
      height : 2px;
      background : white;
      position : absolute;
    }
  }
`

export default MainFooter