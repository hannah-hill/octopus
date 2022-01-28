import React from 'react'
import Logo from '../assets/logo.svg'
import Basket from '../assets/basket.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <a className='header__logo-link'>
            <img
              src={Logo}
              className='header__logo-img'
              alt='Octopus Energy'
            ></img>
          </a>
        </div>
        <div className='header__basket'>
          <a className='header__basket-link'>
            <img src={Basket} className='header__basket-img' alt='Basket'></img>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
