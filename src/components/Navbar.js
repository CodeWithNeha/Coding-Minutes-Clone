import React from 'react';
import { MdOutlineCheckCircle } from 'react-icons/md'
export default function Navbar() {

  return (
  <>
<nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#6610f2"}}>
  <div className="container-fluid mx-5">
    <a className="navbar-brand" href="#">C<MdOutlineCheckCircle />ding Minutes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-5">
        <a className="nav-link" aria-current="page" href="/">Online IDE</a>
        <a className="nav-link" href="#">Udemy Courses</a>
        <a className="nav-link" href="#">LIVE Courses</a>
        <a className="nav-link" href="#">Discord</a>
        <a className="nav-link" href="#">Campus Captain</a>
        <a className="nav-link" href="#">Team</a>
        <a className="nav-link" href="#">SignUp</a>
        <a className="nav-link" href="#">FAQ</a>
        <a className="nav-link" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
</>)
;
}
