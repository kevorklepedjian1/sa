import React from 'react'
import img1 from '../images/zxc.png'
import img from '../images/za.png'
import img2 from '../images/saw.png'
import img3 from '../images/xzc.png'
function Projectjs() {
  return (
    <div className='king'>
        <section class="projects" id="project">
            <div class="projects__header">
                <h2 class="h2">Projects</h2>
               
            </div>
            
            
            <div class="project-list">
            <div class="project">
            <img src={img3} alt="Link Shortener Using React and fetching api" class="project__image"/>
            
            <ul class="project__techs">
                <li class="project__tech">React</li><li class="project__tech">API</li>
            </ul> 

            <div class="project__content">
                <div class="project__name">Link Shortener Using React and fetching api</div>
                
                <div class="project__description">The Link Shortener App is a sleek and efficient web application developed using React.js and styled with CSS. This app seamlessly integrates with a URL shortening API to provide users with a convenient tool for shortening long URLs and managing their shortened links.</div>
                
                <div class="project__links"><a href="https://github.com/kevorklepedjian1/link-shortner-react" class="button ">Github →</a><a href="https://kevorklepedjian1.github.io/link-shortner-react/" class="button ">Demo →</a></div>
            </div>
        </div>       
        <div class="project">
            <img src={img1} alt="Makr landing page using hocs and framer motion" class="project__image"/>
            
            <ul class="project__techs">
                <li class="project__tech">React</li><li class="project__tech">Framer motion</li><li class="project__tech"></li><li class="project__tech"></li><li class="project__tech"></li><li class="project__tech"></li>
            </ul> 

            <div class="project__content">
                <div class="project__name">Makr landing page using hocs and framer motion</div>
                
                <div class="project__description">The Marker Landing Page is a dynamic and visually captivating web experience built with React.js, leveraging Higher Order Components (HOC) for efficient code organization and reusability. Framer Motion is incorporated to seamlessly animate page elements, providing users with an engaging and modern interface.</div>
                
                <div class="project__links"><a href="https://github.com/kevorklepedjian1/ladningpage" class="button ">Github →</a><a href="https://mker.vercel.app/" class="button ">Demo →</a></div>
            </div>
        </div> 
    
        <div class="project">
            <img src={img} alt="Baby Panda" class="project__image"/>
            
            <ul class="project__techs">
                <li class="project__tech">React</li><li class="project__tech">Tailwindcss</li>
            </ul> 

            <div class="project__content">
                <div class="project__name">Skilled Landingpage using Tailwind</div>
               
                <div class="project__description">The Skilled Landing Page is an elegantly crafted web platform meticulously combining React.js and TailwindCSS. Leveraging the modular prowess of React.js components and the utility-first approach of TailwindCSS classes, this page showcases professional skills with a clean and modern aesthetic.</div>
                <div class="project__links"><a href="https://github.com/kevorklepedjian1/skiled" class="button ">Github →</a><a href="https://skiled.vercel.app/" class="button ">Demo →</a></div>
            </div>
        </div> 
    <div class="project">
            <img src={img2} alt="Bookmark" class="project__image"/>
            
            <ul class="project__techs">
                <li class="project__tech">React</li><li class="project__tech">Tailwind</li><li class="project__tech">Hocs</li>
            </ul> 

            <div class="project__content">
                <div class="project__name">Bookmark landing page using hocs and TailwindCSS</div>
                
                <div class="project__description">The Bookmark Landing Page is a visually appealing and user-friendly web platform built using Higher Order Components (HOCs) and TailwindCSS. This landing page seamlessly integrates the structural efficiency of HOCs with the utility-first styling approach of TailwindCSS, providing an intuitive and customizable bookmarking experience.</div>
                <div class="project__links"><a href="https://github.com/kevorklepedjian1/Bookmark" class="button ">Github →</a> <a href="https://bookmark-beta.vercel.app/" class="button ">Demo →</a></div>
            </div>
        </div>
        <div class="project">
            <div alt="bookapi" class="project__image"/>
            
            <ul class="project__techs">
                <li class="project__tech">Nodejs</li><li class="project__tech">Express</li><li class="project__tech">Mongodb</li>
            </ul> 

            <div class="project__content">
                <div class="project__name">Bookapi</div>
                
                <div class="project__description">The Book API is a robust and scalable web service created with Express.js, Node.js, and MongoDB, offering seamless interactions with a database for managing book-related data. Leveraging the power of Express.js for server-side handling, Node.js for efficient runtime, and MongoDB for data storage, this API provides a comprehensive solution for book-related operations.

</div>
                <div class="project__links"><a href="https://github.com/kevorklepedjian1/bookapi" class="button ">Github →</a></div>
            </div>
        </div> 
        <div class="project">
            <div alt="Employee managment" class="project__image"/>
            
            <ul class="project__techs">
                <li class="project__tech">React</li><li class="project__tech">Express</li><li class="project__tech">Nodejs</li><li className='project_tech'>Mongodb</li>
            </ul> 

            <div class="project__content">
                <div class="project__name">Employee Managment</div>
                
                <div class="project__description">The Employee Management System is a comprehensive web application seamlessly integrating Express.js, Node.js, MongoDB, React, and a third-party API. This powerful system efficiently manages employee data, leveraging the backend capabilities of Express and MongoDB, the responsive frontend of React, and the additional functionalities provided by a third-party API.</div>
                <div class="project__links"><a href="https://github.com/kevorklepedjian1/project" class="button ">Github →</a></div>
            </div>
        </div> 
        <div class="project">
            <div alt="Deliveroo clone" class="project__image"/>
            
            <ul class="project__techs">
                <li class="project__tech">React Native</li><li class="project__tech">Zustand</li>
            </ul> 

            <div class="project__content">
                <div class="project__name">Deliveroo clone</div>
                
                <div class="project__description">
Introducing our React Native Deliveroo Clone App – a culinary journey powered by React Native, Reanimated 2, Zustand, and Expo. With Google API integration for precise location services, experience seamless navigation. Elevate engagement with a custom parallax-scrolling header and celebrate success with confetti animations. This app is a fusion of cutting-edge technology and creative design, promising a visually stunning and delightful user experience.</div>
                <div class="project__links"><a href="https://expo.dev/@kevorklepedjian/food?serviceType=classic&distribution=expo%02go" class="button ">Expo →</a></div>
            </div>
        </div> 
        <div class="project">
            <div alt="Home UI" class="project__image"/>
            
            <ul class="project__techs">
                <li class="project__tech">React Native</li><li class="project__tech">Native wind</li>
            </ul> 

            <div class="project__content">
                <div class="project__name">HomeUI</div>
                
                <div class="project__description">
                Welcome to our NativeWind React Native Home Rental App – a sleek fusion of cutting-edge technology and elegant design. Built on the reliability of React Native and enriched with the intuitive aesthetics of NativeWind, this app redefines the home rental experience.</div>
                <div class="project__links"><a href="https://expo.dev/@kevorklepedjian/APP?serviceType=classic&distribution=expo%02go" class="button ">Expo →</a></div>
            </div>
        </div> 
         
            </div>
        
    

            <a class="button" href="https://github.com/kevorklepedjian1">View all → </a>

        </section>
    </div>
  )
}

export default Projectjs