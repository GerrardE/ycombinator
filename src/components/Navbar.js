import React from 'react';
import logo from '../logo.gif'

export default function Navbar() {
  return (
    <div className="nav-container d-flex align-items-center text-white-50 rounded shadow-sm">
      <div className="">
        <nav className="nav nav-underline">
          <img className="hacker-logo" src={logo} alt="logo"></img>
          <a className="nav-link active text-bold" href="#">
            Hacker News</a>
          <span className="seperator">|</span>
          <a className="nav-link" href="#">new</a><span className="seperator">|</span>
          <a className="nav-link" href="#">past</a> <span className="seperator">|</span>
          <a className="nav-link" href="#">comments</a><span className="seperator">|</span>
          <a className="nav-link" href="#">ask</a><span className="seperator">|</span>
          <a className="nav-link" href="#">show</a><span className="seperator">|</span>
          <a className="nav-link" href="#">jobs</a><span className="seperator">|</span>
          <a className="nav-link" href="#">summit</a>

          <div className="ml-auto">
            <a className="nav-link " href="#">login</a>
          </div>
        </nav>
      </div>
    </div>
  )
}
