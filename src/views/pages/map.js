import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class MapView {
  init(){
    document.title = 'NatureWarriors'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`
      
    <style>
    
	
	.map-container {
		padding: 3.2rem 0.8rem;
		position: relative;
		display: inline-block;
   }
	.map-container img {
		width: 100%;
   }
	.map-container .point {
		cursor: pointer;
		position: absolute;
		width: 1rem;
		height: 1rem;
		background-color: #00acc1;
		border-radius: 50%;
		transition: all 0.3s ease;
		will-change: transform, box-shadow;
		transform: translate(-50%, -50%);
		box-shadow: 0 0 0 rgba(0, 172, 193, 0.4);
		animation: pulse 3s infinite;
   }
	.map-container .point:hover {
		animation: none;
		transform: translate(-50%, -50%) scale3D(1.35, 1.35, 1);
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
   }
	.map-container .morne {
		top: 81%;
		left: 5%;
   }
	.map-container .Chamarel {
		top: 70%;
		left: 36%;
   }
	.map-container .Machabée Trail {
		top: 70%;
		left: 42%;
		background-color: red;
   }
	.map-container .colombia {
		top: 55%;
		left: 21%;
   }
	.map-container .panama {
		top: 51%;
		left: 18%;
   }
	.map-container .mexico {
		top: 38%;
		left: 12%;
   }
	.map-container .usa {
		top: 26%;
		left: 17%;
   }
	.map-container .arabia {
		top: 40%;
		left: 53%;
   }
	.map-container .turquia {
		top: 31%;
		left: 57%;
   }
	.map-container .rusia {
		top: 16%;
		left: 67%;
   }
	.map-container .china {
		top: 40%;
		left: 72%;
   }
	.map-container .japon {
		top: 34%;
		left: 86%;
   }
	.map-container .australia {
		top: 72%;
		left: 86%;
   }
	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(0, 172, 193, 0.5);
	   }
		70% {
			box-shadow: 0 0 0 25px rgba(0, 172, 193, 0);
	   }
		100% {
			box-shadow: 0 0 0 0 rgba(0, 172, 193, 0);
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
      <li><a onclick="navBar()" class="links" href="#">OUR LOCATIONS</a></li>
      <li><a onclick="navBar()" class="links" href="/story">OUR STORY</a></li>
      <li><a onclick="navBar()" class="links" href="/book">BOOK US</a></li>
      <li><a onclick="navBar()" class="links" href="/contact">CONTACT US</a></li>
      <li><a onclick="navBar()" class="links" href="#" @click="${() => Auth.signOut()}">SIGN OUT</a></li>
    </ul>  
    </nav>


    <nav id="inline-menu" class="inline-menu">    
    <ul>
      <li><a href="/" @click="${this.menuClick}">HOME</a></li>
      <li><a href="/hike">OUR HIKES</a></li>
      <li><a href="#">OUR LOCATIONS</a></li>
      <li><a href="/story">OUR STORY</a></li>
      <li><a href="/book">BOOK US</a></li>
      <li><a href="/contact">CONTACT US</a></li>
    </ul>  
    </nav>


    <!-- ----------------------------- Temperature --------------------------------------- -->

	<br><br><br><br><br><br><br><br><br>


    <!-- ----------------------------- Main --------------------------------------- -->


    <div class="container">
		<div class="map-container">
			<img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Mauritius_districts_blank.png">
			<div class="point Chamarel tippy" title="Chamarel"></div>
			<div class="point Machabée Trail tippy" title="Machabée Trail"></div>
			<div class="point colombia tippy" title="Colombia"></div>
			<div class="point panama tippy" title="Panamá"></div>
			<div class="point mexico tippy" title="Mexico"></div>
			<div class="point usa tippy" title="Estados Unidos"></div>
			<div class="point arabia tippy" title="Arabia Saudi"></div>
			<div class="point turquia tippy" title="Turquía"></div>     
			<div class="point rusia tippy" title="Rusia"></div>
			<div class="point china tippy" title="China"></div>
			<div class="point japon tippy" title="Japon"></div>
			<div class="point australia tippy" title="Australia"></div>
		</div>
	</div>




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


export default new MapView()