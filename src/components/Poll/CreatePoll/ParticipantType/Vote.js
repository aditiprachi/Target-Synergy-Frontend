import React, { useState,useEffect,useContext } from "react";
import Poll from "react-polls";
import axios from "axios";
import { IdContext } from '../../../../App';
 
const Vote = (props) => {
  const url =props.match.params.id;
  const [textBased , setTextBased] = useState({question:'', choices:[]})
  // const id = useContext(IdContext);
  // const url = id.id;
    useEffect(async () => {
      var result = await axios.get(`https://targetsynergy-backend.herokuapp.com/MCQ/${url}`)
      setTextBased({
        question: result.data.question,
        choices: result.data.choices 
      })
    },[])
    const choice=[];
    textBased.choices.map((post,key) => (
    choice[key]=({option:(post.text), votes:0})
  ));
  let Answers = [...choice];
  console.log(Answers);
  const pollQuestion = textBased.question;
  const handleVote = (voteAnswer) => {
    const newAnswers = Answers.map((answer) => {
      if (answer.option === voteAnswer) {
          answer.votes++;
      }
      console.log(answer);
      return answer;  
    });
    Answers= newAnswers;
  };
 
  return (
    <div>
      <h1>Poll Name</h1>
      <Poll question={pollQuestion} answers={Answers} onVote={handleVote} />
    </div>
  );
};

export default Vote;
