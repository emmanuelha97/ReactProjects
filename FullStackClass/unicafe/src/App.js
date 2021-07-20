import React, { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistic = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {" "}
              {props.text}{" "}
              {props.text === "positive" ? props.value + "%" : props.value}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props.values;
  const all = good + bad + neutral;
  const average = all / 3;
  const positive = good / (all * 100);

  if (all === 0) {
    return <h2>No feedback given</h2>;
  } else {
    return (
      <div>
        <Statistic text={props.text[0]} value={good} />
        <Statistic text={props.text[1]} value={neutral} />
        <Statistic text={props.text[2]} value={bad} />
        <Statistic text={props.text[3]} value={all} />
        <Statistic text={props.text[4]} value={average} />
        <Statistic text={props.text[5]} value={positive} />
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodRating = () => setGood(good + 1);
  const neutralRating = () => setNeutral(neutral + 1);
  const badRating = () => setBad(bad + 1);
  const reset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const values = { good: good, neutral: neutral, bad: bad };
  const valueTxt = ["good", "neutral", "bad", "all", "average", "positive"];

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodRating} value={good} text="good" />
      <Button handleClick={neutralRating} value={neutral} text="neutral" />
      <Button handleClick={badRating} value={bad} text="bad" />
      <Button handleClick={reset} text="reset" />
      <h2>statistics</h2>
      <Statistics text={valueTxt} values={values} />
    </div>
  );
};

export default App;
