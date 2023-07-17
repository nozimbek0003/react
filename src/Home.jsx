import React from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  const [countris, setCountris] = useState([]);
  const limit = 8;
  const skip = 0;
  const [url, changeUrl] = useState(
    `http://13.51.196.53:8080/countries?limit=${limit}&skip=${skip}`
  );
  useEffect(() => {
    getData();
  }, [url]);

  const getData = async () => {
    try {
      const res = await axios({
        url,
      });

      if (res.status === 200) {
        setCountris(res.data);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Header />
      <Hero
        changeUrl={changeUrl}
        getData={getData}
        setCountris={setCountris}
      ></Hero>
      <Main countris={countris} changeUrl={changeUrl}></Main>
    </>
  );
}

export default Home;
