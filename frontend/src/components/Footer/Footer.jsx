import React from 'react'
import { Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";



const Footer = () => {
  return (
    <div className="footer">
    <div>
      <Typography variant="h5">About Me</Typography>
      <Typography>
        Hey, my name is Khushi Kumari . I am a <b>Mern-Stack</b> Developer 
       
      </Typography>

      <Link to="/contact" className="footerContactBtn">
        <Typography>Contact Us</Typography>
      </Link>
    </div>
    <div>
      <Typography variant="h6">Social Media</Typography>
      <a href="https://github.com/KhushiMayara/" target="black">
        <BsGithub />
      </a>
      <a href="https://youtube.com/" target="black">
        <BsYoutube />
      </a>
      <a href="https://instagram.com/" target="black">
        <BsInstagram />
      </a>
      <a href="https://www.linkedin.com/in/khushi-kumari-35a042234/" target="black">
        <BsLinkedin />
      </a>
    </div>
  </div>
  )
}

export default Footer