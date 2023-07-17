import React from "react";
import heroImg from "./img/search.svg";
import { useState } from "react";
import axios from "axios";
import Filter from "./Filter";

function Hero({ setCountris, getData, changeUrl }) {
  const [name, setName] = useState("");
  const searchCountry = async (name) => {
    try {
      const res = await axios({
        url: `http://13.51.196.53:8080/countries?&search=${name}`,
      });
      if (res.status === 200) {
        setCountris(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter" && name !== "") {
      searchCountry(name);
    } else if (e.key === "Enter" && name === "") {
      getData();
    }
  };
  return (
    <div className="hero container">
      <div className="hero-input">
        <img className="input-img" src={heroImg} alt="" />
        <input
          value={name}
          onKeyDown={handleEnter}
          onChange={(e) => setName(e.target.value)}
          className="input"
          type="Search"
          placeholder="Search for a country…"
          autoFocus
        />
      </div>

      <Filter changeUrl={changeUrl} setCountris={setCountris}></Filter>
    </div>
  );
}

export default Hero;
