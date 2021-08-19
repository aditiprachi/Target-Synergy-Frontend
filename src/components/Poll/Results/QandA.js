import styled, { css } from "styled-components";
import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import randomColor from 'randomcolor'
import axios from 'axios'
const id=27
const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      
      },
    },
    h:{
      fontSize: '15px',
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

export const Container = styled.div`
inline-size: 150px;
text-align: center;
 width: 250px;
  padding: 3px;
  margin: 3px;

`;


export const box = styled.div`
  height: 1%;

`;
const OpenEnded = () => {
  const data =[ 1, 2 ,3, 4, 5, 6, 7, 8]
  const [question,setquestion]=useState({question:""})
   axios.get(`http://localhost:8080/QandA/611cc06c056cc02203b25413`)
   .then(res=>{
        
         setquestion({question:res.data.question})
       
    })
    const [OpenEndedResponses , setOpenEndedResponses] = useState({responses:[]});
  
    axios.get(`http://localhost:8080/responses/611ac9536bc994626e4d6beb`)
    .then(res=>{
      console.log(res)
      setOpenEndedResponses({
        responses: res.data.responses
      })
    })
    .catch (error=> {
      console.log(error.response);
    })

    console.log(OpenEndedResponses)
    console.log(question)

    const classes = useStyles();
    
    return ( <div>
    <div> <h1 style={{fontFamily:"Helvetica",  textAlign:"center"}} > {question.question}</h1></div>
        <div style={{justifyContent: 'space-evenly',display: 'flex', flexWrap: 'wrap', width: '100%'}} >
           
    
       
    
   
     {OpenEndedResponses.responses.map((x, i) => {
         var color = randomColor();
    return(
       
       <Container>
         

                <Box color="white" bgcolor="#cc0000" p={1} fontFamily= "Helvetica" style={{ backgroundColor:'#cc0000', width: '100%'}} >
              {x}
                </Box>
               </Container>
       
    )
    })}
    </div>
    </div>
    );
}

export default OpenEnded
