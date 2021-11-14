import React, {useState} from 'react';
const Button = (props) => <button onClick={props.controller}>{props.text}</button>
const Displayanecdotes = (props) => {
  return(
    <div>
      {props.anecdote}
      <br/>
      has {props.votes} votes
    </div>
  );
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))
  const getRandomInt = () => {
    let max = anecdotes.length;
    return Math.floor(Math.random() * max);
  }

  const updateSelected = () => {
    let rand = getRandomInt();
    setSelected(rand);
  }

  const addVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const maxIndex = () => votes.indexOf(Math.max(...votes));
  return (
    <div className="App">
      <h1> Anecdote of the day </h1>
      <br/>
      <Displayanecdotes anecdote = {anecdotes[selected]} votes = {votes[selected]}/>
      <Button text = "Vote" controller={addVote}/>
      <Button text = "next Anecdote" controller={updateSelected}/>
      <br/>
      <h1> Anecdote with most votes </h1>
      <br/>
      <Displayanecdotes anecdote = {anecdotes[maxIndex()]} votes = {votes[maxIndex()]}/>
    </div>
  );
}

export default App;
