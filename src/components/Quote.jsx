import { useState, useEffect } from "react";
const Quote = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      });
  }, []);
  console.log(data);
  return <div> {}</div>;
};

export default Quote;
