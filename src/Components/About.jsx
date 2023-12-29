import React from 'react'
import img from '../images/x.png'
import img1 from '../images/c.png'

function About() {
  return (
    <div className='king'>
         <img src={img} className='image'/>
    <div class="container content" id='about'>
        <section class="hero">
            
            <div class="hero__content">
                <h1 class="hero__title">Hello, I'm Kevork Lepedjian</h1>
                <div class="hero__description">                    
                <p class="hero__description">I am a dedicated tech professional with a Baccalaureate in Information Technology from TLC Lebanon and currently pursuing a degree in Computer Science at Haigazian University. With over 3-4 years of hands-on experience, I've honed my skills in web and mobile development.</p>
                </div>
               <a class="button button__primary" href="mailto:kevorklepedjian1@gmail.com">Let's talk →</a> 
            </div>
            <div class="hero__illustrations">
            <div class="hero__right">
               <img src="/images/logo-outline.svg" alt="" class="hero__logo"/>
              
                <img src={img1} alt="kevo" />
                
              </div>
       
        
  
            </div>
        </section>
    </div></div>
  )
}

export default About