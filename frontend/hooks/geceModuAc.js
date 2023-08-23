import React, { useState, useEffect } from "react";

const useGece = () => {
  const [data, setData] = useState(
    // Burada data vermemin sebebi başka bölümlerde bu yapı kullanılmak istenilirse key olarak kendi değerlerini ama value olarak "data"yı kullanabilmeleridir!.
    JSON.parse(localStorage.getItem("geceModu")) || false // Eğer  geceModu değeri yoksa false olarak değer alıcak ama değer aktifse true olarak onu gösterecek
  );
  //
  useEffect(() => {
    localStorage.setItem("geceModu", JSON.stringify(data));
  }, [data]); //her data değeri değiştiğinde useEffect çalışacak ve localStorage içine o an ki geceModu değeri yani "data" yı  kaydedecek. Böylece data değişmediği sürece o an ki modda çalışacak!

  return { data, setData }; // İlk başta sadece data ile oluşturmayı denedim ama setData useState içinde data değişiklerini kullandığı için olmadan olmadı. İkisini kullanacağımız için return ile bir nevi export ettik
};

export default useGece;
