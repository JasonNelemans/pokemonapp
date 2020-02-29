import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="NavBar">
      <NavLink to="/" activeStyle={{fontWeight: "bold", color: "red"}} exact={true}><button>Home</button></NavLink>
      <NavLink to="/about" activeStyle={{fontWeight: "bold", color: "red"}} exact={true}><button>About</button></NavLink>
      <NavLink to="/discover" activeStyle={{fontWeight: "bold", color: "red"}} exact={true}><button>Search Pokemon</button></NavLink>
      <NavLink to="/discover" activeStyle={{fontWeight: "bold", color: "red"}} exact={true}><button>Liked Pokemon</button></NavLink>
    </div>
  )
}