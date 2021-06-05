import React from 'react';
import './navBar.css'

class menuDown extends React.Component {
  setDrawer = (id, show, evt) => {
    let refBody = document.getElementsByTagName('body')[0]
    let refDrawer = document.getElementById(id)
    let refDrawerSide = document.getElementById('drawerSide')
    if (typeof evt === 'undefined' || (evt.target && evt.target.getAttribute('id') === id)) {
      if (show) {
        refBody.style.overflow = 'hidden'
        refDrawer.style.display = 'flex'
        refDrawer.style.opacity = '1'
        setInterval(() => {
          refDrawerSide.style.transform = 'translate3d(0px, 0, 0)'
        }, 100);
      } else {
        refDrawerSide.style.transform = 'translate3d(-250px, 0, 0)'
        refBody.style.overflow = 'initial'
        window.location.reload();
      }
    }

  }

  render() {
    return (
      <section className='navBar'>
        <div>
          <ul className='navBarUl'>
            <li>Start Page</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="input">
          <div className="input-search">
            <input type="text" placeholder="Search in Keywords" />
            <ion-icon name="search-outline" className="search-icon"></ion-icon>
          </div>

          <div className='socialIcon'>
            <ion-icon name="logo-facebook" className="social-media"></ion-icon>
            <ion-icon name="logo-instagram" className="social-media"></ion-icon>
          </div>
        </div>


        <div className="mobileMenu">
          <div>
            <ion-icon name="logo-nodejs"></ion-icon>
          </div>
          <div>
            <h4>Company Protofolio</h4>
          </div>
          <span className="material-icons threeDot" id='sd' onClick={(e) => this.setDrawer('drawer', true)}>drag_handle</span>
        </div>

        <div id="drawer" className="drawer" onClick={(e) => this.setDrawer('drawer', false, e)}>
          <div className="drawerSide" id="drawerSide">
            <div><a href='/index.html'>Start Page</a></div>
            <div><a href='/index.html'>About Us</a></div>
            <div><a href='/index.html'>Pricing</a></div>
            <div><a href='/index.html'>Contact Us</a> </div>
          </div>
        </div>

      </section>
    );
  }
}

export default menuDown;