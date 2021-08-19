import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import axios from 'axios'

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
  const u =props.match.params.id;
  const [question,setquestion]=useState({question:""})
  axios.get(`http://localhost:8080/WC/${u}`)
        .then(res=>{
              setquestion({question:res.data.question})
       
    })
  const [OpenEndedAnswer,setOpenEndedAnswer]=useState({latestAnswer:""})
     
    
    const classes = useStyles();
    const url=`http://localhost:8080/responses/${u}`
    
   
    const submit = (e) => {

      e.preventDefault();
      
  
      axios.put(url, OpenEndedAnswer)
           .then(res=>{
              console.log(res.data)
            })

    }
    
    function handle(e){
      const newdata={...OpenEndedAnswer}
      newdata[e.target.id]=e.target.value
      setOpenEndedAnswer(newdata)
      console.log(newdata)

    }


    return (
      <Container  style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100%', flexDirection:'column', marginTop: '2%' }} >
           <form onSubmit={submit} className={classes.root} noValidate autoComplete="off"><h4 className={classes.h}>{question.question}</h4>
      
           <h5>Write Your Answer Here:</h5>
      <TextField id="outlined-multiline-static" multiline rows={4} label="Your Answer" variant="outlined" size="small" onChange={(e)=>handle(e)} id="latestAnswer" value={OpenEndedAnswer.latestAnswer} type="text" style={{width: '100%'}} />
    
      
     <Button
        style={{ width: "100%",background:"#cc0000", color:"white" }}
        className={classes.button}
        variant="contained"
       // color="primary"
        size="large"
        fullWidth={true}
        onClick={submit}
      >Submit
      </Button>
  
       </form>
      </Container>
      
    );
}



export default WordCloudUser