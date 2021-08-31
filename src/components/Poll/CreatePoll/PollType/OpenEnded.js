import styled, { css } from "styled-components";
import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import randomColor from 'randomcolor'
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
      fontSize: '15px',
      marginBottom: '0',
    },
    typography: {
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
  height: 1%;

`;
const OpenEnded = (props) => {
    const [OpenEndedResponses , setOpenEndedResponses] = useState({responses:[]});   
    const classes = useStyles();
    
    return (
        <div >
            <h1 fontFamily= "Helvetica" justifyContent="left" >{props.openEnded.question}</h1>
        </div>
    );
}

export default OpenEnded
