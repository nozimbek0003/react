import React from "react";
import Flags from "./Flags";

import Pagi from "./Pagi/Pagi";
function Main({ countris, changeUrl }) {
  return (
    <div className="container">
      <ul className="wrap">
        {countris?.data?.map((item) => {
          return <Flags  key={item._id} data={item} />;
        })}
      </ul>
      <Pagi changeUrl={changeUrl} limit={countris.limit} total={countris.total} />
    </div>
  );
}

export default Main;
