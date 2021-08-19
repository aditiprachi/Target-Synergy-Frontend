import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { ImageRounded } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SliderPicker } from 'react-color'


const Background=({parentCallback, color, setOpacity, togglePopup, textcolor, changecolor}) => {
  
  const [showColorPicker, setShowColorPicker] = useState(false)    
  
    const useStyles = makeStyles((theme) => ({
        h:{
            fontSize: '15px',
            marginBottom: '9px',
        },
      button:{
        maxWidth: '20px', 
        maxHeight: '30px', 
        minWidth: '20px', 
        minHeight: '30px',
        marginRight: '8px',
       
      },
      input: {
        width: 42,
      },
      h5:{
        textAlign: 'justify',
        color: '#4a4746',   
    },
    }));
    const classes = useStyles();
    const [value, setValue] = React.useState(100);

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
      setOpacity(newValue);
    };
    
    const handleInputChange = (event) => {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
      setOpacity(event.target.value === '' ? '' : Number(event.target.value));
    };
    const handleBlur = () => {
        if (value < 0) {
          setValue(0);
        } else if (value > 100) {
          setValue(100);
        }
      };

    return (
        <div >
          
            <h4 className={classes.h5}>Style up your slide with colours and images! Your audience will also see the same background on their screen.</h4>
            
            <h4 className={classes.h}>Text Colour</h4>
            <Button variant="contained" className={classes.button} style={{backgroundColor: 'white', border: '1px solid grey'}} onClick={()=>changecolor("white")}></Button>
            <Button variant="contained" className={classes.button} style={{backgroundColor: 'black', border: '1px solid grey'}} onClick={()=>changecolor("black")}></Button>
            
            <h4 className={classes.h}>Base Colour</h4>
            <Button variant="contained" className={classes.button} style={{backgroundColor: 'white', border: '1px solid grey', marginBottom: "5px"}} onClick={()=>parentCallback("white")}></Button>
            <Button variant="contained" className={classes.button} style={{backgroundColor: 'black', border: '1px solid grey', marginBottom: "5px"}} onClick={()=>parentCallback("black")}></Button>
            <Button variant="contained" className={classes.button} style={{backgroundColor: '#99ddff' /* light blue */, border: '1px solid grey', marginBottom: "5px"}} onClick={()=>parentCallback("#99ddff")}></Button> 
            <Button variant="contained" className={classes.button} style={{backgroundColor: '#ffff4d' /* light yellow */, border: '1px solid grey', marginBottom: "5px"}} onClick={()=>parentCallback("#ffff4d")}></Button>
            <Button variant="contained" className={classes.button} style={{backgroundColor: '#005580' /* blue */, border: '1px solid grey', marginBottom: "5px"}} onClick={()=>parentCallback("#005580")}></Button>
            <Button variant="contained" className={classes.button} style={{backgroundColor: 'red', border: '1px solid grey'}} onClick={()=>parentCallback("red")}></Button>
            <Button variant="contained" className={classes.button} style={{backgroundColor: 'brown', border: '1px solid grey'}} onClick={()=>parentCallback("brown")} ></Button>
            <h4 className={classes.h}>Custom Colour</h4>
            <Button variant="contained" className={classes.button} style={{backgroundColor: 'white', border: '1px solid grey', marginTop: '5px', marginBottom: "5px"}}
             onClick={()=> setShowColorPicker(showColorPicker=>!showColorPicker)}></Button>
            { showColorPicker && (
              <SliderPicker
               color={color}
               onChange={updatedColor => parentCallback(updatedColor.hex)}
               />
            )} 


            <h4 className={classes.h} >Background Image</h4>
            <Button variant ="contained" style={{borderRadius: "2em",
                                         backgroundColor: '#1e69d4',  
                                         color: 'white',
                                         fontSize: '11px',
                                         maxWidth: '130px',
                                         minWidth: '130px',
                                         textAlign: 'center',
                                         }} onClick={togglePopup} ><ImageRounded />&nbsp;Add Image</Button>
                                         <div>
            </div>

            <Typography id="input-slider" gutterBottom style={{marginTop: '10px', fontSize: '15px', fontWeight: '700'}}>
        Background Visibility
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />%
        </Grid>
      </Grid>
        </div>
    )
}

export default Background
