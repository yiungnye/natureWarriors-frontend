import App from './../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute } from './../../Router'
import Auth from './../../Auth'
import Utils from './../../Utils'

class HomeView {
  init(){    
    console.log('HomeView.init')
    document.title = 'NatureWarriors'    
    this.render()    
    Utils.pageIntroAnim()    
  }

  render(){
    const template = html`


    <!-- ---------------------- Header ---------------------- -->
    <a href="#" class="nav_title"><span>NATURE</span>WARRIORS</a>
    <a href="#" @click="${() => Auth.signOut()}" class="nav_title_right"><span>SIGN OUT</a>

    <input id="burger" type="checkbox" />
  
    <label id="nav-toggle" for="burger">
        <span></span>
        <span></span>
        <span></span>
    </label>

    <nav id="sidebar" class="hamburger">    
    <ul>
      <li><a onclick="navBar()" class="links" href="#" @click="${this.menuClick}">HOME</a></li>
      <li><a onclick="navBar()" class="links" href="/hike">OUR HIKES</a></li>
      <li><a onclick="navBar()" class="links" href="/map">OUR LOCATIONS</a></li>
      <li><a onclick="navBar()" class="links" href="/story">OUR STORY</a></li>
      <li><a onclick="navBar()" class="links" href="/book">BOOK US</a></li>
      <li><a onclick="navBar()" class="links" href="/contact">CONTACT US</a></li>
      <li><a onclick="navBar()" class="links" href="#" @click="${() => Auth.signOut()}">SIGN OUT</a></li>
    </ul>  
    </nav>


    <nav id="inline-menu" class="inline-menu">    
    <ul>
      <li><a href="#" @click="${this.menuClick}">HOME</a></li>
      <li><a href="/hike">OUR HIKES</a></li>
      <li><a href="/map">OUR LOCATIONS</a></li>
      <li><a href="/story">OUR STORY</a></li>
      <li><a href="/book">BOOK US</a></li>
      <li><a href="/contact">CONTACT US</a></li>
    </ul>  
    </nav>
      
      <header>
      <section class="showcase">
      <img src="/images/header.jpg">
      <div class="text">
        <p>Hike safely in Mauritius</p>
        <h2 style="color:#B6C828;">DISCOVER</h2> 
        <h3>MAURITIUS</h3>
        <p style="border-top: 1px solid white;">Need some time for yourself? Tired of office and daily routines?  
        You have come at the right place ! Nature Warriors Mauritius brings you to places which will make your soul feel peace,  
        revitalize your brain and change your life. Join us !</p>
        <a href="https://www.facebook.com/naturewarriorsmauritiusofficial/" target="_blank">BOOK US NOW</a>
      </div>
    </section>
    </header>
    


    
    
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

export default new HomeView()
  