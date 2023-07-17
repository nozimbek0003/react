import React from "react";
import { useNavigate } from "react-router-dom";
function Flags({ data }) {
  const navigate = useNavigate();

  return (
    <div className="flags" onClick={() => navigate(`/a/${data.name.slug}`)}>
      <div className="img_wrap">
        <img className="germany" src={data.flags.png} alt="" />
      </div>
      <div className="boxs">
        <h2 className="boxs-title">{data.name.common}</h2>
        <div className="boxs-popular">
          Population: <span className="number">{data.population}</span>
        </div>
        <div className="boxs-region">
          Region: <span className="europe">{data.continents}</span>
        </div>
        <div className="boxs-capital">
          Capital: <span className="berlin">{data.capital}</span>
        </div>
      </div>
    </div>
  );
}

export default Flags;
