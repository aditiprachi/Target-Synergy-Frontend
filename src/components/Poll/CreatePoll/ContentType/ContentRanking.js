import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import { IdContext } from '../../../../App';

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

const ContentRanking = ({setData2, data2, handleChangeIndex, inputList,setInputList, contentauth}) => {
   const [state, setState] = useState({
    checkedA: false,
    checkedB: false,
     checkedC: false,
  });


// handle input change
const handleInputChange = (e, index) => {
  console.log(inputList)
  const list = [...inputList];
  console.log(inputList)
  list[index][e.target.name] = e.target.value;
  
  setInputList(list);
  
 console.log(inputList)
};

// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...inputList];
  list.splice(index, 1);
  setInputList(list);
};
// handle click event of the Add button
const handleAddClick = () => {
  setInputList([...inputList, { option:"", votes: 0 }]);
};
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
  const classes = useStyles();
  const url="https://targetsynergy-backend.herokuapp.com/RT"
 
  const id = useContext(IdContext)
  const submit = (e) => {

    e.preventDefault();
    // inputList.map((choicee,key)=>{
    //   data2.option[key]=choicee.option
    // })
    const a = contentauth;
    
    const q ={
      question: data2.question,
      choices: inputList,
      googleId: a,
      type:"RT"
    }
    console.log(q)
    axios.post(url, q)
         .then(res=>{
            console.log(res)
            id.setId(res.data);
            
          })

  }


  function handle(e){
    const newdata={...data2}
    newdata[e.target.id]=e.target.value
    setData2(newdata)
    console.log(newdata)

  }



return (
 <div >
     <form onSubmit={submit} className={classes.root} noValidate autoComplete="off"><h4 className={classes.h}>Your Question</h4>
 

   <TextField id="outlined-basic" label="Your question" variant="outlined" size="small" onChange={(e)=>handle(e)} id="question" value={data2.question} type="text" style={{width: '100%'}}/>
   <h4 className={classes.h}>Categories</h4>
   <Grid container={true}  direction="row"  alignItems="center" 
>
{inputList.map((x, i) => {
   return (
     <div >
     
       <TextField
       id="outlined-basic"
       variant="outlined" size="small"
       id="outlined-basic"
       style={{width: '100%'}}
         className="ml10"
         name="option"
         placeholder="Enter Category"
         value={x.option}
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

 </Grid>  <Button
   style={{ width: "235px",background:"#cc0000", color:"white" }}
   className={classes.button}
   variant="contained"
  // color="primary"
   size="large"
   fullWidth={true}
   onClick={(e)=>{handleChangeIndex(2);submit(e)}}
 >Submit
 </Button>
  </form>
 </div>
 
);
}



export default ContentRanking