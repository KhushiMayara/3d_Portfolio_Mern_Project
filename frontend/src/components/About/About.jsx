import React from 'react'
import { Typography } from "@mui/material";
import "./About.css";


const About = ( ) => {
  return (
    <div className="about">
    <div className="aboutContainer">
      <Typography>this is a sample quote</Typography>
    </div>
    <div className="aboutContainer2">
      <div>
           <img src="https://media.licdn.com/dms/image/D4D03AQFxLp8Txyxwqw/profile-displayphoto-shrink_200_200/0/1676069579815?e=1687996800&v=beta&t=bWhfBBpWUyn59ab3nTVpFA_CdJfZLqwqYsx0R_tTh48" alt="khu" 
            className='aboutAvatar' />

        <Typography variant="h4" style={{ margin: "1vmax 0", color: "black" }}>Khushi Kumari</Typography>
        <Typography > Mern Stack Developer</Typography>
           
        <Typography style={{ margin: "1vmax 0" }}>
            enthusiastic to learn something. </Typography>
      </div>
           
       <div>
       <Typography
            style={{
              wordSpacing: "1px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
           I am a 3rd year student pursuing a B.Tech with a specialization in computer science engineering from LNCT indore. I am always fascinated with Idea of how we can create almost anything by code.
          </Typography>
       </div>

    </div>
    </div>
)
}

export default About