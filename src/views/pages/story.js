import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class StoryView {
  init(){
    document.title = 'NatureWarriors'    
    this.render()    
    Utils.pageIntroAnim()
  }


  render(){
    const template = html`

    <style>
    
/* about -------------------------------------------------------------------------------------------------------------------------------------------------------------*/

.about {
  position: relative;
  min-height: 100vh;
}

.about .title h1, .about .title h4, .about .title h5, .about .title p {
  text-align: center;
}

.about .title h5 {
  padding: 150px 0 10px 0;
}

.about .title p {
  margin: 50px auto;
  padding: 0 50px 0 50px;
  max-width: 700px;
}

.about .title .images {
  margin: 100px auto;
  max-width: 1100px;
}

.aboutCards {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

.aboutContainer {
  display: flex;
  width: 1440px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}

.aboutCards button {
  padding: 5px 90px;
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
      <li><a onclick="navBar()" class="links" href="/book">OUR LOCATIONS</a></li>
      <li><a onclick="navBar()" class="links" href="#">OUR STORY</a></li>
      <li><a onclick="navBar()" class="links" href="/book">BOOK US</a></li>
      <li><a onclick="navBar()" class="links" href="/contact">CONTACT US</a></li>
      <li><a onclick="navBar()" class="links" href="#" @click="${() => Auth.signOut()}">SIGN OUT</a></li>
    </ul>  
    </nav>


    <nav id="inline-menu" class="inline-menu">    
    <ul>
      <li><a href="/" @click="${this.menuClick}">HOME</a></li>
      <li><a href="/hike">OUR HIKES</a></li>
      <li><a href="/book">OUR LOCATIONS</a></li>
      <li><a href="#">OUR STORY</a></li>
      <li><a href="/book">BOOK US</a></li>
      <li><a href="/contact">CONTACT US</a></li>
    </ul>  
    </nav>
         

    <!-- --------------------------------------- Main --------------------------- -->
    

    <section class="about">
    <div class="title">
    <h5>WHO WE ARE   /   WHAT WE BELIEVE   /    HOW WE WORK</h5>

    <h1>About Nature Warriors</h1>
    <h4>Discover places where to hike safely</h4>

    <p>We propose different type of hikes that is Mountain Climbing, long walks 
    in Nature and Coastal walks. As per your timeline, we adjust ourselves in 
    order to propose the best trip to you and your family/friends/company.</p>
    </div>

    <div class="aboutCards">
    <div class="aboutContainer">
      <div class="card">
        <div class="card-header">
          <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
        </div>
        <div class="card-body">
          <h4>
          Our Story
          </h4>
          <p>
          With the aim of discovering the beauty 
          of the island, a team of friends 
          including Shahid Peermamode built 
          the group Nature Warriors Mauritius to 
          explore our paradise island. 
          </p>
          <div class="user">
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <img src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" alt="ballons" />
        </div>
        <div class="card-body">
          <h4>
          Our Approach
          </h4>
          <p>
          Need some time for yourself? Tired of 
          office and daily routines? You have 
          come at the right place ! 
          </p>
          <div class="user">
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
        </div>
        <div class="card-body">
          <h4>
          Our Hikes
          </h4>
          <p>
          The concept was simple: Revitalize your 
          brain and change your life
          </p>
          <div class="user">
           <button>Learn More</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
        </div>
        <div class="card-body">
          <h4>
          Book Us
          </h4>
          <p>
          Nature Warriors Mauritius brings you 
          to places which will make your soul 
          feel peace.
          </p>
          <div class="user">
           <button>Learn More</button>
          </div>
        </div>
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


export default new StoryView()