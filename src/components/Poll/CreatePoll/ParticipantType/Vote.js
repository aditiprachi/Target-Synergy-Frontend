import React, { useState,useEffect,useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Poll from "react-polls";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import { IdContext } from '../../../../App';
const useStyles = makeStyles((theme) => ({
  root: {
      flex: 1,
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    
    },
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "2em",
    
  },
}));
const Vote = (props) => {
  const auth = props.auth;
  const classes=useStyles();
  const history = useHistory();
  const url =props.match.params.id;
  const [textBased , setTextBased] = useState({question:'', choices:[]})
  const [Bg, setBg]=useState({bgcolor:'',textcolor:'',opacity:1})
    useEffect(async () => {
      var result = await axios.get(`https://targetsynergy-backend.herokuapp.com/MCQ/${url}`)
      setTextBased({
        question: result.data.question,
        choices: result.data.choices 
      })
    },[])
let Answers = textBased.choices
// console.log(Answers);
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
  const uri = `/MCQ/${url}/results`
  function handleResult(path) {
    history.push(path);
}
  const handleClick = () =>{
    const q ={
      question: pollQuestion,
      choices:Answers
    }
    console.log(q)
    axios.put(`https://targetsynergy-backend.herokuapp.com/MCQ/${url}`, q)
           .then(res=>{
              console.log(res)
            })
            if (window.confirm('Your response has been successfully submitted. You will now be redirected to the homepage.   To submit another response, click Cancel ')) 
            {
            window.location.href='https://targetsynergy.herokuapp.com';
            };
  }
 
 
  return (
    <div >
      
      <div style={{width:"50%", margin:"auto", paddingTop:"5%"}}>
          <h1 style={{textAlign:"center"}}>{pollQuestion}</h1>
          <Poll  answers={Answers} onVote={handleVote} />
      </div>
      
      <div style={{display: 'flex',flexDirection: 'column', width: '100%', justifyContent: 'space-evenly',alignItems: "center"}}>
     <Button
        style={{ width: "20%",background:"#cc0000", color:"white" }}
        className={classes.button}
        variant="contained"
        onClick = {()=>handleClick()}
        size="large"
        fullWidth={true}
      >Submit
      </Button>
      {auth && <Button
        style={{ width: "20%",background:"#cc0000", color:"white"}}
        className={classes.button}
        variant="contained"
        onClick={() => {handleResult(`${uri}`)}}
        size="large"
       >View Result
      </Button>} </div>
    </div>
  );
};

export default Vote;
