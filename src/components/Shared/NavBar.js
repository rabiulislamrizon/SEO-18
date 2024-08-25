import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (


    <>
      {
        logo.map(l => <div className="navbar-area">
          {/* Menu For Mobile Device */}

          <div className="mobile-nav">
            <a href="/" className="logo">
              <img src={l.logo} className="logo-one" alt="Logo" />
              <img src="assets/img/sticky-logo.png" className="logo-two" alt="Logo" />
            </a>
          </div>
          {/* Menu For Desktop Device */}
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light ">
                <a className="navbar-brand" href="/">
                  <img src={l.logo} alt="Logo" />
                </a>
                <a className="navbar-brand-sticky" href="/">
                  <img src={l.logo} alt="Logo" />
                </a>
                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto">

                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about-sec" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#services-sec" className="nav-link">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#pricing-sec" className="nav-link">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact-sec" className="nav-link">
                        Contact Us
                      </a>
                    </li>

                  </ul>
                  <div className="menu-btn">

                    <ul className="nav">
                      {user?.email ? (
                        <li className="nav-item m-2 d-flex align-items-center">
                          <Link to="/dashboard" className="default-btn">Dashboard</Link>
                        </li>
                      ) : (
                        <li className="nav-item m-2 d-flex align-items-center">
                          <Link to="/login" className="default-btn">Log in</Link>
                        </li>
                      )}

                      {users.map((u, index) => (
                        u.userEmail === user?.email && u.userRole === 'Admin' && (
                          <li className="nav-item m-2 d-flex align-items-center" key={index}>
                            <Link to="/admin" className="default-btn">Admin</Link>
                          </li>
                        )
                      ))}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>)
      }

    </>
  );
};

export default NavBar;
