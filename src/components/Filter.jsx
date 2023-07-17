import React from "react";
import arrow from "./img/arrow.svg";

function Filter({ changeUrl }) {
  return (
    <div>
      <div className="hero-dopdown">
        <div className="dropdown">
          <div className="drop">
            <h2 className="dropbtn">Filter by Region</h2>
            <img className="arrow" src={arrow} alt="" />
          </div>
          <div
            onClick={(e) => {
              if (e.target.textContent === "All") {
                changeUrl(`http://13.51.196.53:8080/countries?all`);
              } else {
                changeUrl(
                  `http://13.51.196.53:8080/countries?region=${e.target.textContent}`
                );
              }
            }}
            className="dropdown-content"
          >
            <p>All</p>
            <p>Africa</p>
            <p>Americas</p>
            <p>Asia</p>
            <p>Europe</p>
            <p>Oceania</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
