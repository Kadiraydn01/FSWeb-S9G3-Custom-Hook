import React, { useState, useEffect } from "react";
import axios from "axios";

const useLocal = (url) => {
  //Burada yaptığım değişiklik ile axios kullanmak istenildiği componentlerde useLocal(url) ile url bölümüne adres girilerek axios rahatça kullanılır.
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
