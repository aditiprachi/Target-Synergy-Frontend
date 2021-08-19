import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import randomColor from 'randomcolor'
const id=36

const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%'
    },
    input: {
      width: 20,
    },
  });
  
  const Scales =() => {
    const [questions , setQuestions] = useState({questions:[]});
 
    useEffect(async () => {
      var result = await axios.get(`http://localhost:8080/QandA/${id}`)
      setQuestions({
       
        questions: result.data.questions 
      })
    },[])
    const qAndA=[];
    questions.questions.map((post,key) => (
    qAndA[key]=post.text
));
console.log(qAndA);
    const classes = useStyles();
    
    //const [inputList, setInputList] = useState([{value}]);
    const [value, setValue] = React.useState();
    const [inputList, setInputList] = useState([{ choice: "" }]);
    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleInputChange = (event,index) => {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
      const { name, value } = value;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
  
    const handleBlur = () => {
      if (value < 0) {
        setValue(0);
      } else if (value > 100) {
        setValue(100);
      }
    };
    const[data, setData]=useState({
      
        response:[]
    })
    const url="http://localhost:8080/QandAResponse"
    const submit = (e) => {

      e.preventDefault();
    //   inputList.map((resp,key)=>{
    //     data.response[key]=resp.response
    //   })
  
      const q ={
        
       responses: data.response
      }
      console.log(q)
      axios.post(url, q)
           .then(res=>{
              console.log(res.data)
            })

    }
    return (
      <div><h3 fontFamily= "Helvetica">{data5.question}</h3>
           <form onSubmit={submit} className={classes.root} noValidate autoComplete="off">
      
{qAndA.map((x, i) => {
  var colors=randomColor();
    return(
        <div>
        <Typography id="input-slider" gutterBottom>
          {qAndA[i]}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          
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
              value={qAndA[i]}
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
            />

          </Grid>
        </Grid>
           
        </div>
        );
      })}
    
        <Button
        style={{ width: "248px",background:"#cc0000", color:"white" }}
        className={classes.button}
        variant="contained"
       // color="primary"
        size="large"
        fullWidth={true}
        onClick={submit}
      >Submit
      </Button>
  
       
       
       </form>
      </div>
      
    );
  }
  export default Scales