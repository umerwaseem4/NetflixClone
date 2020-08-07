import React from "react";

const ReuseableHome = (props) => {
  return (
    <section className="section_a">
      <div className="container">
        <div className="main__heading">
          <h1>{props.heading}</h1>
          <p>{props.desc}</p>
        </div>
        <video src={props.video} alt="" />
      </div>
    </section>
  );
};

export default ReuseableHome;
