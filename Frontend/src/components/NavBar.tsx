import React from 'react'

const NavBar = () => {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  )
}

export default NavBar