import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { logout } from '../redux/features/authSlice';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const auth  = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch();

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
      {!auth.isSuccess ? (
        <Link className="main-nav-item" to="./login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      ) : (
        <Link className="main-nav-item" to="/" onClick={()=>dispatch(logout())}>
          <span className="main-nav-username">{user.firstName}</span>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      )}
      </div>
    </nav>
  )
}

export default NavBar