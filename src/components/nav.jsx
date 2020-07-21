import React from "react";
import { Link } from "gatsby";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <link to="/">Home</link>
      </li>
      
      <li>
      <link to="/blog">Blog</link>
      </li>
    </ul>
  </nav>
);

export default Nav;