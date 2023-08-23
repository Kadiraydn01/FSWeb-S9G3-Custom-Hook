import React, { useState, useEffect } from "react";
import axios from "axios";

const useLocal = (url) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  return { info };
};

export default useLocal;
