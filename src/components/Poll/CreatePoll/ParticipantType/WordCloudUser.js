import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      
      },
    },
    h:{
      textAlign: 'center',
      marginBottom: '0',

    },
    typography: {
        // for settings
        fontSize: 12,
      },
    button: {
        margin: theme.spacing(1),
        borderRadius: "2em",
        
      },
    addicon: {
        color: 'solid white',
    },
}));

const WordCloudUser = (props) => {
    const history = useHistory();
    const u = props.match.params.id;
    const [resUrl,setResUrl] = useState("");
    const [question,setquestion]=useState({question:""})
    axios.get(`https://targetsynergy-backend.herokuapp.com/WC/${u}`)
          .then(res=>{
                setquestion({question:res.data.question})
      })
      .catch((error)=>{
        console.log(error)
      })

      useEffect(() => {
        axios.get(`https://targetsynergy-backend.herokuapp.com/quest/${u}`)
              .then(res => {  
                console.log(res.data)
                        setResUrl(res.data);
              })
      }, u)


    const [WCAnswer,setWCAnswer]=useState({latestAnswer:""})

    const classes = useStyles();
    const url=`https://targetsynergy-backend.herokuapp.com/responses`
    
    const submit = () => {

      const q ={
        question: u,
        latestAnswer: WCAnswer.latestAnswer
      }
      console.log(resUrl)
      
                      if(resUrl === ""){
                        axios.post(url, q)
                             .then(res=>{
                                console.log(res.data)
                              })
                      }
                      else{
                        axios.put(`${url}/${resUrl}`, q)
                        .then(res=>{
                            console.log(res.data)
                          })
                      }

    }
    
    function handle(e){
      const newdata={...WCAnswer}
      newdata[e.target.id]=e.target.value
      setWCAnswer(newdata)
      console.log(newdata)

    }

    const uri = `/WC/${u}/results`
    function handleResult(path) {
        history.push(path);
    }


    return (
      <Container className={classes.root} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100%', flexDirection:'column', marginTop: '2%', width: '50%' }} >
           <form onSubmit={submit} className={classes.root} noValidate autoComplete="off"><h1 className={classes.h}>{question.question}</h1>
      
     <h5>Write Your Answer Here:</h5>
      <TextField id="outlined-multiline-static" multiline rows={4} label="Your Answer" variant="outlined" size="small" onChange={(e)=>handle(e)} id="latestAnswer" value={WCAnswer.latestAnswer} type="text" style={{width: '100%'}} />
    
      <div style={{display: 'flex',flexDirection: 'row', width: '100%', justifyContent: 'center',alignItems: "center"}}>
     <Button
        style={{ width: "40%",background:"#cc0000", color:"white" }}
        className={classes.button}
        variant="contained"
       // color="primary"
        size="large"
        fullWidth={true}
        onClick={()=>submit()}
      >Submit
      </Button>
      <Button
        style={{ width: "40%",background:"#cc0000", color:"white"}}
        className={classes.button}
        variant="contained"
        onClick={() => {handleResult(`${uri}`)}}
        size="large"
       >View Result
      </Button></div>
  
       </form>
      </Container>
      
    );
}



export default WordCloudUser