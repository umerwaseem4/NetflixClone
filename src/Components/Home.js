import React from "react";
import { Link } from "react-router-dom";
import ReuseableComponent from "./ReuseableHome";
import Accordion from "./According";

const Home = () => {
  return (
    <div className="Home">
      <div className="home__hero">
        <div className="home__nav">
          <img
            src={require("../Images/../Images/logo.png")}
            alt="logo"
            className="home__logo img-fluid"
          />
          <Link className="home__maincta">Sign in</Link>
        </div>
        <div className="home__headingarea ">
          <h1 className="home__heroHeading">
            100% entertainment <br /> guaranteed.
          </h1>
          <h4 className="home__subHeading">
            You'll love Netflix! If you don't, cancel within 7 days for a
            refund.
          </h4>
          <p className="heropara">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <Link className="main__ctasec ">Show More Results</Link>
        </div>
      </div>
      <ReuseableComponent
        heading="Enjoy on your TV."
        desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
      />
      <ReuseableComponent
        heading="Watch everywhere."
        desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
      />
      <Accordion />
    </div>
  );
};

export default Home;
