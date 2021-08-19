import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Container } from '@material-ui/core';


const Scales =() => {
 // const [question,setquestion]=useState({question:""})
 //  axios.get(`http://localhost:8080/Scales/`)
  // .then(res=>{
        
  //       setquestion({question:res.data.question})
       
 //   })
    const ScaleSlider = withStyles({
        root: {
          color: '#52af77',
          height: 8,
        },
        thumb: {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          marginTop: -8,
          marginLeft: -12,
          '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
          },
        },
        active: {},
        valueLabel: {
          left: 'calc(-50% + 4px)',
        },
        track: {
          height: 8,
          borderRadius: 4,
        },
        rail: {
          height: 8,
          borderRadius: 4,
        },
      })(Slider);
    return(

           
       
            <Container >
         
     <ScaleSlider valueLabelDisplay="auto" defaultValue={0}  />
</Container>
    
        
    );
};
export default Scales