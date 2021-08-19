import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

const ContentQandA = ({data6, setData6,handleChangeIndex}) => {
  const [state, setState] = useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
   });
 
 const classes = useStyles();
 const url="http://localhost:8080/QandA"
 const id = useContext(IdContext);

 const submit = (e) => {

   e.preventDefault();
  
     axios.post(url, data6)
        .then(res=>{
           console.log(res.data);
           id.setId(res.data);
           console.log(id.id);
         })

 }
 
 function handle(e){
   const newdata={...data6}
   newdata[e.target.id]=e.target.value
   setData6(newdata)
   console.log(newdata)

 }


 return (
   <div >
        <form onSubmit={submit} className={classes.root} noValidate autoComplete="off"><h4 className={classes.h}>Your Question</h4>
   
  
   <TextField id="outlined-basic" label="Your multiple choice question" variant="outlined" size="small" onChange={(e)=>handle(e)} id="question" value={data6.question} type="text" style={{width: '100%'}} />
 
   
  <Button
     style={{ width: "235px",background:"#cc0000", color:"white" }}
     className={classes.button}
     variant="contained"
    // color="primary"
     size="large"
     fullWidth={true}
     onClick={submit}
     onClick={(e)=>{handleChangeIndex(2);submit(e)}}
   >Submit
   </Button>

    </form>
   </div>
   
 );
}




export default ContentQandA