import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class ContactView {
  init(){
    document.title = 'NatureWarriors'    
    this.render()    
    Utils.pageIntroAnim()
  }


  render(){
    const template = html`


    <style>
    
    @media screen and (max-width: 768px) {
      #container {
        width: 95%;
      }
    }
    
    @media screen and (max-width: 480px) {
      .title h1 {
        font-size: 26px;
      }
      
      .underline {
        width: 68px;
      }
      
      #form_button {
        padding: 15px 25px;
      }
    }
    
    @media screen and (max-width: 420px) {
      .title h1 {
        font-size: 18px;
      }
      
      .icon {
        height: 35px;
        width: 35px;
      }
      
      .underline {
        width: 53px;
      }
      
      input[type='text'], [type='email'], select, textarea {
        font-size: 0.875em;
      }
    }


    .slider {
      overflow-x: hidden;
      width: 100%;
    }
    .slider .slider-row {
      width: 2956px;
      height: 194.5px;
      background-image: url(/images/slider1.png);
      background-size: 2956px 250px;
      animation: slide 40s linear infinite;
    }
    @keyframes slide {
      from {
        background-position-x: 0;
     }
      to {
        background-position-x: -2956px;
     }
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
      <li><a onclick="navBar()" class="links" href="/hike">OUR HIKES</a></li>
      <li><a onclick="navBar()" class="links" href="/map">OUR LOCATIONS</a></li>
      <li><a onclick="navBar()" class="links" href="/story">OUR STORY</a></li>
      <li><a onclick="navBar()" class="links" href="/book">BOOK US</a></li>
      <li><a onclick="navBar()" class="links" href="#">CONTACT US</a></li>
      <li><a onclick="navBar()" class="links" href="#" @click="${() => Auth.signOut()}">SIGN OUT</a></li>
    </ul>  
    </nav>


    <nav id="inline-menu" class="inline-menu">    
    <ul>
      <li><a href="/" @click="${this.menuClick}">HOME</a></li>
      <li><a href="/hike">OUR HIKES</a></li>
      <li><a href="/map">OUR LOCATIONS</a></li>
      <li><a href="/story">OUR STORY</a></li>
      <li><a href="/book">BOOK US</a></li>
      <li><a href="#">CONTACT US</a></li>
    </ul>  
    </nav>

    <!-- ---------------------- Video ---------------------- -->

    <div id="Iframe-YouTube-Life-Coach" class="set-margin set-padding set-box-shadow center-block-horiz">
        <div class="responsive-wrapper 
          responsive-wrapper-wxh-560x315"
          style="-webkit-overflow-scrolling: touch; overflow: auto;">

          <iframe src="https://www.youtube.com/embed/2WiexIR_8fE"> 
            <p style="font-size: 110%;"><em><strong>ERROR: </strong>  
      An &#105;frame should be displayed here but your browser version does not support &#105;frames. </em>Please update your browser to its most recent version and try again.</p>
          </iframe>  
        </div>
  </div>

    <!-- ---------------------- Instagram ---------------------- -->


    <section class="instagram">
    <div class="title">
    <h1>NatureWarriors on Instagram</h1>
    <h5>#NatureWarriorsMauritius</h5>
    <div class="slider">
    <div class="slider-row"></div>
    </div>
  
    </div>
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


export default new ContactView()