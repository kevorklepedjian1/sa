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
                <h1 class="hero__title">Software Engineer, AI, Making the world better, one software at a time.</h1>
                <div class="hero__description">                    
                <p class="hero__description">As a software engineer, my capabilities were showcased during my internship, where I contributed to <span>redeveloping</span> an internal portal for a department. Additionally, I played a role in <span>testing</span>  a new feature within an app built on a financial system.</p><p class="hero__description">I also <span>developed a Power BI dashboard</span> to enhance the visualization of internal data. For My graduation project, "Muhtm," it is an <span>AI-based tool</span> for in-depth sentiment analysis of customer reviews, aiding business owners in product evaluation.</p><p class="hero__description">To explore more about my projects and professional journey, feel free to contact me or visit my LinkedIn profile.</p>
                </div>
               <a class="button button__primary" href="#contacts">Let's talk →</a> 
            </div>
            <div class="hero__illustrations">
            <div class="hero__right">
               <img src="/images/logo-outline.svg" alt="" class="hero__logo"/>
              
                <img src={img1} alt="Elias" class="hero__image"/>
                <div class="hero__des">
                Ada Lovelace the world's first computer programmer
                </div>
                </div>
                <div class="hero__status">Currently working on  <a href="">Portfolio</a></div>
              
        {/* <svg width="100%" class="dots" viewBox="0 0 104 104">
            <circle cx="4" cy="4" r="4" /><circle cx="4" cy="28" r="4" /><circle cx="4" cy="52" r="4" /><circle cx="4" cy="76" r="4" /><circle cx="4" cy="100" r="4" /><circle cx="28" cy="4" r="4" /><circle cx="28" cy="28" r="4" /><circle cx="28" cy="52" r="4" /><circle cx="28" cy="76" r="4" /><circle cx="28" cy="100" r="4" /><circle cx="52" cy="4" r="4" /><circle cx="52" cy="28" r="4" /><circle cx="52" cy="52" r="4" /><circle cx="52" cy="76" r="4" /><circle cx="52" cy="100" r="4" /><circle cx="76" cy="4" r="4" /><circle cx="76" cy="28" r="4" /><circle cx="76" cy="52" r="4" /><circle cx="76" cy="76" r="4" /><circle cx="76" cy="100" r="4" /><circle cx="100" cy="4" r="4" /><circle cx="100" cy="28" r="4" /><circle cx="100" cy="52" r="4" /><circle cx="100" cy="76" r="4" /><circle cx="100" cy="100" r="4" />
        </svg> */}
        
  
            </div>
        </section>
    </div></div>
  )
}

export default Pro