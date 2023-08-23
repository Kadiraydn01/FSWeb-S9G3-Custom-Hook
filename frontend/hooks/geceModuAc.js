import React, { useState, useEffect } from "react";

const useGece = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("geceModu")) || false
  );

  useEffect(() => {
    localStorage.setItem("geceModu", JSON.stringify(data));
  }, [data]);

  return { data, setData };
};

export default useGece;
