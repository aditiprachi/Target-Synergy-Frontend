import React,{useState,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';
import { Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Grid } from '@material-ui/core';
import { ImageRounded } from '@material-ui/icons';
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

const ContentImageChoice = ({setData2, data2, handleChangeIndex, state, setState,setImgResult, imgresult}) => {
  let formData = new FormData();
  const id = useContext(IdContext);    
  const [inputList, setInputList] = useState([{ choice: "" }]);
      
  const images=[]
   let i=0;
      // On file select (from the pop up)
     const onFileChange = (event) => {
      
        // Update the state
        setState({ selectedFile: event.target.files[0],
        bgurl: URL.createObjectURL(event.target.files[0]) });
        
      
      };
      
      const onFileUpload = () => {
      
       formData.append(
        "file",
        state.selectedFile,
        state.selectedFile.name
      );
        
        console.log(state.selectedFile);
        console.log(formData);
      
        axios.post("http://localhost:8080/file/upload", formData,{headers:{"Content-Type" : "application/json"}})
        .then(res=>{
          console.log(res)
          images[i]=({option:(res.data)})
          i++
          console.log(images)

        })
      };
      console.log(images)


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
    images[--i]=({})
    const r = [...imgresult];
    console.log(imgresult);
    r.splice(index, 1);
    setImgResult(r);
 };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { choice: "" }]);
    setImgResult([...imgresult, { distance: 0, colors: ["#ffd847", "#e0a106"], }]);
  };
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    const classes = useStyles();
    const url="http://localhost:8080/mcq"
    const submit = (e) => {

   e.preventDefault();
   console.log(images)
      images.map((choicee,key)=>{
         data2.choice[key]=choicee.option
       })
  
      const q ={
         question: data2.question,
        choices: data2.choice
   }
       console.log(q)
     axios.post(url, q)
         .then(res=>{
            console.log(res)
            id.setId(res.data);
            console.log(id.id);
             })

     }


    function handle(e){
      const newdata={...data2}
      newdata[e.target.id]=e.target.value
      setData2(newdata)
    

    }


    return (
      <div >
          <form onSubmit={submit} className={classes.root} noValidate autoComplete="off"><h4 className={classes.h}>Your Question</h4>
      
     
        <TextField id="outlined-basic" label="Your image choice question" variant="outlined" size="small" onChange={(e)=>handle(e)} id="question" value={data2.question} type="text" style={{width: '100%'}}/>
        <h4 className={classes.h}>Options</h4>
        <Grid container={true}  direction="row"  alignItems="center" 
>
{inputList.map((x, i) => {
        return (
          <div >
              
         
          <Button>
        
      </Button>
          <Button variant ="contained" style={{ width: "230px",background:"#cc0000", color:'white'}}
        className={classes.button}
        
       // color="primary"
        size="large"
        fullWidth={true}
        
              name="choice"
        placeholder="Enter choice"
              value={x.choice}
              onChange={e => handleInputChange(e, i)}  ><input type="file" onChange={e => onFileChange(e,i)} />
              </Button>
              <div>
                
                <Button className={classes.button}
         style={{borderRadius: "2em",
                                         backgroundColor: '#1e69d4',  
                                         color: 'white',
                                         size: 'small',
                                         fontSize: '11px',
                                         maxWidth: '50x',
                                         minWidth: '50px',
                                         textAlign: 'center',
                                         width: '40%', background:"#cc0000",
                                         color:'white'}}
                                         onClick={onFileUpload}>
                  Upload!
                </Button>
            </div>
           
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



export default ContentImageChoice