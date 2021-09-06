import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import { IdContext } from '../../../../App';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        flexGrow: 1,
        flexShrink: 1
      
      
      
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

const Content = ({setData1,data1, setResult, result, inputList,setInputList, handleChangeIndex,contentauth}) => {
     const [state, setState] = React.useState({
         checkedA: false,
         checkedB: false,
         checkedC: false,
      });
    
  console.log(contentauth)
      

  // handle input change
  const handleInputChange = (e, index) => {
    console.log(inputList)
    const list = [...inputList];
    console.log(inputList)
    list[index][e.target.name] = e.target.value;
    
    setInputList(list);
    
   console.log(inputList)};
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    const r = [...result];
    console.log(result);
    r.splice(index, 1);
    setResult(r);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { option:"", votes: 0 }]);
    setResult([...result, { distance: 0, colors: ["#ffd847", "#e0a106"], choices: "" }]);
  };
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    const [errorMessage, setErrorMessage] = useState(0);
    const classes = useStyles();
    const url="https://targetsynergy-backend.herokuapp.com/MCQ"
    const id = useContext(IdContext);
    const submit = (e) => {
    e.preventDefault();
    console.log(inputList.length)
    const l=inputList.length
    if(l===1){
      setErrorMessage(1);
      console.log(errorMessage)
      
    }
    else{
      setErrorMessage(0);
      inputList.map((choicee,key)=>{
        data1.option[key]=choicee

      })
      const a = contentauth;
      
      const q ={
        question: data1.question,
        choices:data1.option,
        googleId : a,
        type: "MCQ"
      }
      console.log(q)
     
      axios.post(url, q)
           .then(res=>{
              console.log(res)
              id.setId(res.data);
              console.log(id);
            })
          
      }
      {handleChangeIndex(2)}

    }


    function handle(e){
      const newdata={...data1}
      newdata[e.target.id]=e.target.value
      setData1(newdata)
      console.log(newdata)

    }


    return (
      <div style={{height: '100%'}} >
          <form onSubmit={submit} className={classes.root} noValidate autoComplete="off"><h4 className={classes.h}>Your Question</h4>
      
     
        <TextField id="outlined-basic" label="Your multiple choice question" variant="outlined" size="small" onChange={(e)=>handle(e)} id="question" value={data1.question} type="text" style={{width: '100%'}} />
        <h4 className={classes.h}>Options</h4>
        <Grid container={true}  direction="row"  alignItems="center" 
>
  
{inputList.map((x, i) => {
        return (
          <div key={i} >
            <TextField
            id="multiplechoice"
            variant="outlined" size="small"
            className="ml10"
            name="option"
            label="Enterchoice"
            value={x.option}
            style={{width: '100%'}}
            onChange={e => handleInputChange(e, i)}
            />
            <div>
              {inputList.length !== 1 && <DeleteIcon style={{background:"#C0C0C0", color:"white", marginRight:"3px"}}
                className="mr10"
                onClick={() => handleRemoveClick(i)}/>}
              {inputList.length - 1 === i && <AddIcon style={{background:"#C0C0C0", color:"white"}} onClick={handleAddClick} className={classes.addicon} />}
            </div>
          </div>
        
        );
      })}
    {errorMessage===1 && (
  <h5 style={{color: '#cc0000',}}> Please add atleast one more option!</h5>
)}
      </Grid>  <Button
        style={{ width: "100%",background:"#cc0000", color:"white" }}
        className={classes.button}
        variant="contained"
       // color="primary"
        size="large"
        fullWidth={true}
        onClick={(e)=>{submit(e)}}
      >Submit
      </Button>
  
       </form>
      </div>
      
    );
}



export default Content