import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class HikeView {
  init(){
    document.title = 'NatureWarriors'    
    this.render()    
    Utils.pageIntroAnim()
  }


  render(){
    const template = html`


    <style>
    
    :root{
      --background-dark: #2d3548;
      --text-light: rgba(255,255,255,0.6);
      --text-lighter: rgba(255,255,255,0.9);
      --spacing-s: 8px;
      --spacing-m: 16px;
      --spacing-l: 24px;
      --spacing-xl: 32px;
      --spacing-xxl: 64px;
      --width-container: 1200px;
    }
    
    
    .hero-section{
      margin-top: 100px;
      align-items: flex-start;
      background-image: linear-gradient(15deg, #0f4667 0%, #2a6973 150%);
      display: flex;
      justify-content: center;
      padding: var(--spacing-xxl) var(--spacing-l);
    }
    
    .card-grid{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: var(--spacing-l);
      grid-row-gap: var(--spacing-l);
      max-width: var(--width-container);
      width: 100%;
    }
    
    @media(min-width: 540px){
      .card-grid{
        grid-template-columns: repeat(2, 1fr); 
      }
    }
    
    @media(min-width: 960px){
      .card-grid{
        grid-template-columns: repeat(4, 1fr); 
      }
    }
    
    .card{
      list-style: none;
      position: relative;
    }
    
    .card:before{
      content: '';
      display: block;
      padding-bottom: 150%;
      width: 100%;
    }
    
    .card__background{
      background-size: cover;
      background-position: center;
      border-radius: var(--spacing-s);
      bottom: 0;
      filter: brightness(0.75) saturate(1.2) contrast(0.85);
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transform-origin: center;
      trsnsform: scale(1) translateZ(0);
      transition: 
        filter 200ms linear,
        transform 200ms linear;
    }
    
    .card:hover .card__background{
      transform: scale(1.05) translateZ(0);
    }
    /*
    .card-grid:hover > .card:not(:hover) .card__background{
      filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
    }*/
    
    .card__content{
      left: 0;
      padding: var(--spacing-l);
      position: absolute;
      top: 0;
    }
    
    .card__category{
      color: var(--text-light);
      font-size: 0.9rem;
      margin-bottom: var(--spacing-s);
      text-transform: uppercase;
    }
    
    .card__heading{
      color: var(--text-lighter);
      font-size: 1.9rem;
      text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
      line-height: 1.4;
      word-spacing: 100vw;
    }
 
    </style>


    <!-- ---------------------- Header ---------------------- -->
    <a href="/" @click="${this.menuClick}" class="nav_title"><span>NATURE</span>WARRIORS</a>
    <a href="#" @click="${() => Auth.signOut()}" class="nav_title_right"><span>SIGN OUT</a>

    <input id="burger" type="checkbox" />
  
    <label id="nav-toggle" for="burger">
        <span></span>
        <span></span>
        <span></span>
    </label>

    <nav id="sidebar" class="hamburger">    
    <ul>
      <li><a onclick="navBar()" class="links" href="/" @click="${this.menuClick}">HOME</a></li>
      <li><a onclick="navBar()" class="links" href="#">OUR HIKES</a></li>
      <li><a onclick="navBar()" class="links" href="/map">OUR LOCATIONS</a></li>
      <li><a onclick="navBar()" class="links" href="/story">OUR STORY</a></li>
      <li><a onclick="navBar()" class="links" href="/book">BOOK US</a></li>
      <li><a onclick="navBar()" class="links" href="/contact">CONTACT US</a></li>
      <li><a onclick="navBar()" class="links" href="#" @click="${() => Auth.signOut()}">SIGN OUT</a></li>
    </ul>  
    </nav>


    <nav id="inline-menu" class="inline-menu">    
    <ul>
      <li><a href="/" @click="${this.menuClick}">HOME</a></li>
      <li><a href="#">OUR HIKES</a></li>
      <li><a href="/map">OUR LOCATIONS</a></li>
      <li><a href="/story">OUR STORY</a></li>
      <li><a href="/book">BOOK US</a></li>
      <li><a href="/contact">CONTACT US</a></li>
    </ul>  
    </nav>
         

    <!-- --------------------------------------- Main --------------------------- -->


<section class="hero-section">
  <div class="card-grid">
    <a class="card" href="#">
      <div class="card__background" style="background-image: url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card__background" style="background-image: url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
    <a class="card" href="#">
      <div class="card__background" style="background-image: url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </li>
    <a class="card" href="#">
      <div class="card__background" style="background-image: url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"></div>
      <div class="card__content">
        <p class="card__category">Category</p>
        <h3 class="card__heading">Example Card Heading</h3>
      </div>
    </a>
  <div>
</section>


<!-- ------------------------ Footer ---------------------------- -->

<footer class="footer">
<div class="footer__addr">
  <h1 class="footer__logo">Nature Warriors</h1>
      
  <h2>Contact</h2>
  
  <address>
  5806 6494<br>
        
    <a class="footer__btn" href="mailto:naturewarriorsmauritius20@gmail.com">Email Us</a>
  </address>
</div>

<ul class="footer__nav">
  <li class="nav__item">
    <h2 class="nav__title">Media</h2>

    <ul class="nav__ul">
    <li>
    <span><i class="fab fa-instagram fa-lg"></i></span><a href="https://www.instagram.com/nature_warriors_mauritius/" target="_blank">&nbsp;naturewarriorsmauritiusofficial </a>
    </li>

    <li>
    <span><i class="fab fa-facebook-square fa-lg"></i></span><a href="https://www.facebook.com/naturewarriorsmauritiusofficial/" target="_blank">&nbsp;Nature Warriors Mauritius</a>
    </li>

    <li>
    <span><i class="fab fa-linkedin fa-lg"></i></span><a href="https://www.linkedin.com/company/nature-warriors-mauritius-limited/about/" target="_blank">&nbsp;Nature Warriors (Mauritius) Limited</a>
    </li>
          
    </ul>
  </li>
  
  <li class="nav__item nav__item--extra">
    <h2 class="nav__title">Upcoming Events</h2>
    
    <ul class="nav__ul nav__ul--extra">
      <li>
        Climbing Brise Fer Mountain (622m)
      </li>
      
    </ul>
  </li>
  
  <li class="nav__item">
    <h2 class="nav__title">Legal</h2>
    
    <ul class="nav__ul">
      <li>
        Privacy Policy
      </li>
      
      <li>
        Terms of Use
      </li>
      
      <li>
        Sitemap
      </li>
    </ul>
  </li>
</ul>

<div class="legal">
  <p>&copy; 2021. This website was made in the case of a university project, all rights goes to the group, Nature Warriors Mauritius.</p>
  
  <div class="legal__links">
    <span>Made in Mauritius</span>
  </div>
</div>
</footer>


    `
    render(template, App.rootEl)
  }
}


export default new HikeView()