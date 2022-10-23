import { useState, useEffect } from "react";
import "./Quote.css";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Quote = () => {
  const [theme] = useContext(ThemeContext);
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });
  const [allQuotes, setAllQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setAllQuotes(data));
  }, []);

  // useEffect to set 'quote' on change of 'allQuotes' value
  useEffect(() => {
    if (allQuotes.length) getQuote();
    function getQuote() {
      const randomNumber = Math.floor(Math.random() * allQuotes.length);
      const text = allQuotes[randomNumber].text;
      const author = allQuotes[randomNumber].author;

      setQuote((prevQuote) => ({
        ...prevQuote,
        text: text,
        author: author,
      }));
    }
  }, [allQuotes]);

  return (
    <div
      className="quoteCard"
      style={{
        border: `2px solid ${theme}`,
        borderRightColor: theme,
        borderBottomColor: theme,
        color: theme,
      }}
    >
      <h3>Quote of the day:</h3>
      <p>"{quote.text}"</p>
      <p>~ {quote.author} ~</p>
    </div>
  );
};

export default Quote;
