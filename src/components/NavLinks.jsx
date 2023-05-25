import React from "react";
import { Link } from "react-scroll";

const NavLinks = ({ link, location, className, onClick }) => {
  return (
    <li className={className}>
      <Link to={link} smooth duration={500} onClick={onClick}>
        {location}
      </Link>
    </li>
  );
};

export default NavLinks;
