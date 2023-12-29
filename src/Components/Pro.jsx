import React from 'react'
import img from '../images/x.png'
import img1 from '../images/g.png'

function Pro() {
  return (
    <div className='king'>
         <img src={img} className='image'/>
    <div class="container content">
        <section class="hero">
            
            <div class="hero__content">
                <h1 class="hero__title">Embark on a Journey of Digital Brilliance with Kevork Lepedjian</h1>
                <div class="hero__description">                    
                <p class="hero__description"> Greetings! I'm Kevork Lepedjian, a React JS/React Native maestro with a backend twist. Dive into a world of seamless experiences, where web interfaces dance and mobile applications sing. My backend wizardry ensures your digital realm is not just functional but a symphony of innovation. Let's collaboratively sculpt a technological masterpiece that transcends the ordinary. Ready to redefine digital brilliance together? 🚀✨</p>
                </div>
               <a class="button button__primary" href="mailto:kevorklepedjian1@gmail.com">Let's talk →</a> 
            </div>
            <div class="hero__illustrations">
            <div class="hero__right">
               <img src="/images/logo-outline.svg" alt="" class="hero__logo"/>
              
                <img src={img1} alt="kevo" class="hero__image"/>
                <div class="hero__des">
                Ada Lovelace the world's first computer programmer
                </div>
                </div>
                <div class="hero__status">Currently working on  <a href="">Portfolio</a></div>
              
       
        
  
            </div>
        </section>
    </div></div>
  )
}

export default Pro