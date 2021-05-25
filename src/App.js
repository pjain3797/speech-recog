import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [randonNumber, setRandomNumber] = useState(randomNumberGenerator);
  window.SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;

  let recognition = new window.SpeechRecognition();

  // useEffect(() => recognition.start());

  recognition.start();

  useEffect(() => {
    if (Number(text) === randonNumber) {
      setResult(`congo`);
      setScore(score + 1);
      setRandomNumber(randomNumberGenerator());
    }
    return () => setResult("");
  }, [text]);

  // useEffect(() => {
  recognition.addEventListener("result", (e) => {
    console.log({ event: e });
    setText(e.results[0][0].transcript);
  });
  // });

  function randomNumberGenerator() {
    return Math.floor(Math.random() * 100);
  }
  return (
    <div className="App">
      <h1>Text</h1>
      <h3>Score: {score}</h3>
      <p>{text}</p>
      <div>Number: {randonNumber}</div>
      <button onClick={() => setRandomNumber(randomNumberGenerator)}>
        Change Number
      </button>
      <div>{result}</div>
    </div>
  );
}
