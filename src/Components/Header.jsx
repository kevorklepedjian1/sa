import React from 'react'

function Header() {
  return (
    <>
    <header class="header">
            <input class="hamburger" type="checkbox" aria-label="Menu"/>

            <div class="media-header">
                <span class="media-header__line"></span>
                <div class="media-header__links">
                    
        <a href="https://linkedin.com/in/MunirahD" class="media">
            <img src="/images/icons/linkedin.svg" alt="linkedin" class="media__icon"/>
        </a>
        <a href="mailto:MunirahDu@gmail.com" class="media">
            <img src="/images/icons/email.svg" alt="email" class="media__icon"/>
        </a>
        <a href="https://github.com/MunirahD" class="media">
            <img src="/images/icons/github.svg" alt="github" class="media__icon"/>
        </a>
        <a href="tel:+966545023287" class="media">
            <img src="/images/icons/phone.svg" alt="phone" class="media__icon"/>
        </a>
                </div>
            </div>
<div className='king'>
            <div class="containers">
                <div class="header__inner">
                    <a class="logo" href="/">
                    <img class="logo__img" src="/images/logo.png" alt="Munirah logo"/>
                        <span class="logo__name">Munirah Alduraibi</span>
                    </a>
                    <div class="header__links">
                        
                                <a href="/" class="header__link_active header__link ">Home</a>
                            
                                <a href="/projects" class="header__link ">Projects</a>
                            
                                <a href="/about-me" class="header__link ">About me</a>
                            
                        <a href="https://drive.google.com/file/d/1WJXwF1rqWehvEvE5dle9lVV4Zf_ijDM9/view?usp=sharing" class="header__link" target="_blank">CV 🪄</a> 
                    </div>
                </div>
            </div></div>
        </header>
    </>
  )
}

export default Header