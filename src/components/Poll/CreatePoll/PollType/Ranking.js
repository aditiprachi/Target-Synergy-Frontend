import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Ranking({data2, inputList, textcolor}) {
  return (
    <div>
      <h1 style={{color: textcolor}}>{data2.question}</h1>
      {inputList.map((x,i)=>{
            return(
              <Box component="fieldset" mb={3} borderColor="transparent" key={i}>
                <Typography component="legend">{inputList[i].choice}</Typography>
                <Rating
                defaultValue={0}
                precision={0.5}
                max={5}
                size="large"
                />
              </Box>  )
        })}
    </div>
  );
}

export default Ranking