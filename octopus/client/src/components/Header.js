import React, { useState } from 'react'
import LogoSvg from '../assets/logo.svg'
import BasketSvg from '../assets/basket.svg'
import Basket from '../components/Basket'

const Header = ({ basket }) => {
  const [show, setShow] = useState(false)

  const handleShow = () => (!show ? setShow(true) : setShow(false))

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <a className='header__logo-link' href='https://octopus.energy/'>
            <img
              src={LogoSvg}
              className='header__logo-img'
              alt='Octopus Energy'
            ></img>
          </a>
        </div>
        <div className='header__basket'>
          <button className='header__basket-link' onClick={handleShow}>
            <img src={BasketSvg} className='header__basket-img' alt='Basket' />
          </button>
          {show && <Basket products={basket} />}
        </div>
      </div>
    </header>
  )
}

export default Header
