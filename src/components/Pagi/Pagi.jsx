import React from "react";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
const Pagi = ({ changeUrl, limit, total }) => {
  const [page, setPage] = useState(1);
  const countPage = Math.ceil(total / limit);

  function handlePage(event, page) {
    setPage(page);
    changeUrl(
      `http://13.51.196.53:8080/countries?limit=${limit}&skip=${
        (page - 1) * limit
      }`
    );
  }

  return (
    <div className="pagi">
      <Pagination count={countPage} page={page} onChange={handlePage} color="primary" />
    </div>
  );
};

export default Pagi;
