import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Container } from '@material-ui/core';

const Scales =({data5,inputList}) => {
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
        <div>
            <h1>{data5.question}</h1>
        {inputList.map((x,i)=>{
            return(
            <Container key={i}>
        <b style={{textAlign: 'left'}}>{inputList[i].choice}</b>  
     <ScaleSlider  defaultValue={0}  />
</Container>)
        })}
        </div>
    );
};
export default Scales