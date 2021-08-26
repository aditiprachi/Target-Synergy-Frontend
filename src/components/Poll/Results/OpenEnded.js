import styled, { css } from "styled-components";
import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import randomColor from 'randomcolor'
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        margin: theme.spacing(1),
        width: '100%',
        justifyContent:'center', alignItems:"center", height:'100%'
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
overflow-wrap: break-word;
text-align: center;
float: left;
  width: 250px;
  padding: 3px;
  margin: 3px;

`;


export const box = styled.div`
  height: 1%;`;
  
const OpenEnded = (props) => {
  const url = props.match.params.id;
  const [OpenEndedResponses , setOpenEndedResponses] =useState({responses:[]});
  const [resUrl, setResUrl] = useState("");
  const [question,setquestion]=useState({question:"tgyh"})

  axios.get(`https://targetsynergy-backend.herokuapp.com/OE/${url}`)
   .then(res=>{
         setquestion({question:res.data.question})
         console.log(question);
    })
    .catch((error)=>{
      console.log(error)
    })

    
      useEffect(async ()=>{
        
        await axios.get(`https://targetsynergy-backend.herokuapp.com/quest/${url}`)
      .then(result => {
        setResUrl(result.data);
      // console.log(resUrl);
      })
      .catch(error => console.log(error))
   
    },[])
        
      if(resUrl !== ""){
        axios.get(`https://targetsynergy-backend.herokuapp.com/responses/${resUrl}`)
        .then ((res) => {
          setOpenEndedResponses({responses: res.data.responses})
        })
        .catch(error => console.log(error))
      }
    
    
    const choice=OpenEndedResponses.responses;
    const classes = useStyles();
    
    return (
      <div>
        {/* {choice.map((post,key) => {
  console.log(post);
})} */}
      <div> <h1 style={{fontFamily:"Helvetica",  textAlign:"center", fontSize:"10px"}} >{question.question} </h1></div>
          <div style={{justifyContent: 'space-evenly',display: 'flex', flexWrap: 'wrap', width: '60%'}} >
           {choice.map((x, i) => {
           const color = randomColor({count:1});
      return(
         
         <Container>
            <Box color="white" bgcolor={color} p={1} fontFamily= "Helvetica" style={{ backgroundColor:{color}, width: '100%'}} >
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
