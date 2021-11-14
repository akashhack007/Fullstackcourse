import React,{useState} from 'react';
const Button = (props) => <button onClick = {props.controller}> {props.text} </button>
const Statisticline = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
  if (props.viewer.total > 0)
  {  
    return(
      <table>
        <tbody>
        <Statisticline text = "Good" value = {props.viewer.good} />
        <Statisticline text = "Neutral" value = {props.viewer.neutral} />
        <Statisticline text = "Bad" value = {props.viewer.bad} />
        <Statisticline text = "all" value = {props.viewer.total} />
        <Statisticline text = "avg" value = {props.viewer.avg} />
        <Statisticline text = "positive" value = {props.viewer.pos} />
        </tbody>
      </table>  
    );
  }
  else
  {
    return(
      <div> No feedback given</div>
    )
  }

}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const addGood = () => {
    setGood(good + 1);
    addTotal();
  }
  const addBad = () => {
    setBad(bad + 1);
    addTotal();
  }
  const addNeutral = () => {
    setNeutral(neutral + 1);
    addTotal();
  }
  const addTotal = () => {
    setTotal(total+1);
  }
  const viewer = {
    good: good,
    bad: bad,
    neutral: neutral,
    total: total,
    avg: ((good - bad) / total).toFixed(1),
    pos:  ((good / total) * 100).toFixed(1).toString() + '%'
  }
  return (
    <div className="App">
      <h1>Give Feedback :)</h1>
      <Button text = "Good" controller = {addGood} /> 
      <Button text = "Neutral" controller = {addNeutral} /> 
      <Button text = "Bad" controller = {addBad} />
      <br/>
      <h1>Statistics</h1>
      <Statistics viewer = {viewer}></Statistics>
    </div>
  );
}

export default App;
