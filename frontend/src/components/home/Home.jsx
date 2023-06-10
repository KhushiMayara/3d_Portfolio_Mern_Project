import React, { useEffect } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import * as THREE from "three";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonimage from "../../Images/dog.jpg";
import venusimage from "../../Images/bg.jpg";
import spaceimage from "../../Images/bann2.jpg";
import js from "../../Images/js.png";
import css from "../../Images/css.png";
import tcss from "../../Images/tcss.png";
import react from "../../Images/react.png";
import db from "../../Images/db.png";
import node from "../../Images/node.png";
import layout from "../../Images/layout.jpg";
import lay3 from "../../Images/lay3.jpg";
import layout3 from "../../Images/layout3.jpg";
import layout4 from "../../Images/layout4.jpg";
import { Typography } from '@mui/material';
import TimeLine from "../TimeLine/TimeLine";
import {
   SiCplusplus,
   SiReact,
   SiJavascript,
   SiMongodb,
   SiNodedotjs,
   SiExpress,
   SiCss3,
   SiHtml5,
   SiThreedotjs,
 } from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';
import { MouseOutlined } from '@mui/icons-material';

const Home = () => {

     useEffect(() =>{
        const textureLoader = new THREE.TextureLoader();
        const moonTexture = textureLoader.load(moonimage);
        const venusTexture = textureLoader.load(venusimage);
        const spaceTexture = textureLoader.load(spaceimage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const canvas = document.querySelector(".homeCanvas")
        const renderer = new THREE.WebGL1Renderer({ canvas })
    //********  moon
        const moonGeometry = new THREE.SphereGeometry(2,64,64);
        const moonmaterial = new THREE.MeshStandardMaterial({ map: moonTexture});
        const moon = new THREE.Mesh( moonGeometry,  moonmaterial);

    //******** venus 
    const venusGeometry = new THREE.SphereGeometry(3,64,64);
    const venusmaterial = new THREE.MeshBasicMaterial({ map: venusTexture});
    const venus = new THREE.Mesh( venusGeometry,  venusmaterial);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
        pointLight.position.set(8, 5, 5);
        pointLight2.position.set(-8, -5, -5)

        //const lightHelper = new THREE.PointLightHelper(pointLight);
        

        //const controls = new OrbitControls(camera, renderer.domElement);


        scene.add(moon);
        scene.add(pointLight);
        scene.add(pointLight2);
        //scene.add(lightHelper);
        scene.add(venus);
        scene.background=spaceTexture;
         
        const constSpeed = 0.01;
        window.addEventListener("mousemove" ,(e)=>{
            if(e.clientX <= window.innerWidth / 2){
                moon.rotation.x  -=  constSpeed;
                moon.rotation.y  +=  constSpeed;
                venus.rotation.x  -=  constSpeed;
                venus.rotation.y  +=  constSpeed;
             }

             if(e.clientX > window.innerWidth / 2){
                moon.rotation.x  -=  constSpeed;
                moon.rotation.y  -=  constSpeed;
                venus.rotation.x  -=  constSpeed;
                venus.rotation.y  -=  constSpeed;
             }

             if(e.clientY > window.innerHeight / 2){
                moon.rotation.x  -=  constSpeed;
                moon.rotation.y  +=  constSpeed;
                venus.rotation.x  -=  constSpeed;
                venus.rotation.y  +=  constSpeed;
             }

             if(e.clientY <= window.innerHeight / 2){
                moon.rotation.x  -=  constSpeed;
                moon.rotation.y  -=  constSpeed;
                venus.rotation.x  -=  constSpeed;
                venus.rotation.y  -=  constSpeed;
             }
        })
        
        venus.position.set(8, 5, 5)

        camera.position.set(4, 4, 8)
        const animate =()=>{
            requestAnimationFrame(animate)
            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;

            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.render(scene, camera);

            renderer.setSize(window.innerWidth, window.innerHeight)
            renderer.render(scene, camera);

        };
        animate();

        return window.addEventListener("scroll", () => {
          camera.rotation.z = window.scrollY * 0.001;
          camera.rotation.y = window.scrollY * 0.003;
    
          const skillsBox = document.getElementById("homeskillsBox");
    
          if (window.scrollY > 1500) {
            skillsBox.style.animationName = "homeskillsBoxAnimationOn";
          } else {
            skillsBox.style.animationName = "homeskillsBoxAnimationOff";
          }
        });


     },[])

     
  
  return (
    <div className='home'>
       <canvas className='homeCanvas'></canvas>

       <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>K</p>
          <p>H</p>
          <p>U</p>
          <p>S</p>
          <p>H</p>
          <p>I</p>                                   
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2"> AND </Typography>
          <Typography variant="h2">DEVELOPER</Typography>
         
        </div>
        <Link to="">VIEW WORK</Link>
        {/*<Link to="/projects">VIEW WORK</Link>*/}
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

      <div className="homeContainer">
        <Typography variant='h3'>TIMELINE</Typography>
        <TimeLine timelines = {[1,2,3,4]} />
        
      </div>
    
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
           <img src={js} alt="face1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
           <img src={css} alt="face2" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
           <img src={tcss} alt="face3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
           <img src={react} alt="face4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
           <img src={node} alt="face5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
           <img src={db} alt="face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>
        
        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>

     <div className="homeYoutube">
       <Typography variant="h3">Youtube video</Typography>

       <div className="homeYoutubeWrapper">
          <YoutubeCard image={layout}
            title='sample video'
          />
           <YoutubeCard image={layout4}
            title='sample video'
          />
           <YoutubeCard image={lay3}
            title='sample video'
          />
           <YoutubeCard image={layout3}
            title='sample video'
          />
          
       </div>  
     </div>
    

   
    </div>
  )
}

export default Home