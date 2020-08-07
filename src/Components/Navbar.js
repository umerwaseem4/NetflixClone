import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"} `}>
      <div className="main__nav">
        <Link to="/">
          <img
            className={`nav__logo ${show && "nav__width"}`}
            src={require("../Images/logo.png")}
            alt="logo"
          />
        </Link>
      </div>
      <img
        className="nav__avatar"
        src="https://occ-0-4091-64.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABe0HfBYCaNApCD7Wy6nM9X7PlyeLdqSbDOWSaZIKbhaGQm8jaWLm-5ow8XaTavQgorvuNbp7By0-EtnUF0uY-Rc.png?r=a30"
        alt="avatar"
      />
    </div>
  );
};

export default Navbar;
