import React from 'react'
import * as BurgerMenu from 'react-burger-menu'
import {NavLink} from './NavLink'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const SideMenu = (props) => (
  <div>
    <BurgerMenu.slide
      pageWrapId={props.pageWrapId || 'page-wrap'}
      styles={styles}
      noOverlay={true} 
    >
       <NavLink to="/" >Home</NavLink>
       <NavLink to="/compare" >Compare</NavLink>
      {props.children}
    </BurgerMenu.slide>
  </div>
)

export default SideMenu
