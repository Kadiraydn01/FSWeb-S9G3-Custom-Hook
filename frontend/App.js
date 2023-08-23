import React, { useState, useEffect } from "react";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import useLocal from "./hooks/localStorageKullan";
import useGece from "./hooks/geceModuAc";

const App = () => {
  const { info } = useLocal(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  );
  const { data, setData } = useGece();
  return (
    <div className={data ? "dark-mode App" : "App"}>
      <Navbar geceModu={data} setGeceModu={setData} />
      <Charts coinData={info} />
    </div>
  );
};

export default App;
