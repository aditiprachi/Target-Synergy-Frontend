import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import axios from 'axios'
import { IdContext } from '../../../../App';

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

const ContentScales = ({data5, setData5, setInputList, inputList, handleChangeIndex}) => {
     const [state, setState] = useState({
         checkedA: false,
         checkedB: false,
         checkedC: false,
      });
    


  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { choice: "" }]);
  };
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    const classes = useStyles();
    const url="http://localhost:8080/polls"
   
    const id = useContext(IdContext)
    const submit = (e) => {

      e.preventDefault();
      inputList.map((choicee,key)=>{
        data5.choice[key]=choicee.choice
      })
  
      const q ={
        question: data5.question,
       choices: data5.choice
      }
      console.log(q)
      axios.post(url, q)
           .then(res=>{
              console.log(res)
              id.setId(res.data);
              
            })

    }


    function handle(e){
      const newdata={...data5}
      newdata[e.target.id]=e.target.value
      setData5(newdata)
      console.log(newdata)

    }


    return (
      <div >
          <form onSubmit={submit} className={classes.root} noValidate autoComplete="off"><h4 className={classes.h}>Your Question</h4>
      
     
        <TextField id="outlined-basic" label="Your question" variant="outlined" size="small" onChange={(e)=>handle(e)} id="question" value={data5.question} type="text" style={{width: '100%'}}/>
        <h4 className={classes.h}>Statments</h4>
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
              name="choice"
   placeholder="Enter Statement"
              value={x.choice}
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



export default ContentScales