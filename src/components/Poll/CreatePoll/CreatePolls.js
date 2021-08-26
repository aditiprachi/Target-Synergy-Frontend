import React,{useState} from "react";
import Sidebar from "./Sidebar";
import Presentation from "./Presentation";
import '../CreatePoll/CreatePolls.css'
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Link,useHistory } from 'react-router-dom';
import { Breadcrumbs, CardActionArea, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Container, Grid } from "@material-ui/core";
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import Bgimage1 from '../../images/bgimage_1.jpg';
import Bgimage2 from '../../images/bgimage_2.jpg';
import Bgimage3 from '../../images/bgimage_3.png';
import randomColor from 'randomcolor'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
root:{
    flex: 1,

},
button: {
  margin: theme.spacing(1),
  borderRadius: "2em",
},
}));


  const CreatePolls=(props) => {
    const [isOpen, setIsOpen] = useState(false);
    const images=[]; //for ranking
    const [img,setimg] = useState({bg:null,key:0});
    const [result, setResult] = useState(
     [ {
        distance: 0,
        colors: ["#ffd847", "#e0a106"],
        choices: ""
      }
    ]
    );                          //multiplechoice type
    const [imgresult, setImgResult] = useState(
      [
        {
          distance: 0,
          colors: ["#ffd847", "#e0a106"]
        }
      ]
    )
    const[data1, setData1]=useState({
      question: "",
      option:[{text: ""},{votes: 0}]  
  })
     const[data2, setData2]=useState({
     question: "",
     choice:[]
})
    const[data3, setData3]=useState({
    question:""
})
    const[data6, setData6]=useState({
    question:""
    })
    const[data4, setData4]=useState({
      question:""
      })
const[data5, setData5]=useState({
  question: "",
  option:[{text: ""},{votes: 0}]  
})
  
const [inputListMC, setInputListMC] = useState([{ option: "", votes: 0 }]);
const [inputListScales, setInputListScales] = useState([{ choice: "" }]);
const [inputList4, setInputList4] = useState([{ choice: "" }]);
const [inputListRanking, setInputListRanking] = useState([{ choice: "" }]);
   
  const handleBgImage=(newValue)=>{
    setimg({bg:newValue});
    if(newValue==Bgimage1){
      setimg({key:1})
    }
    else if(newValue==Bgimage2){
      setimg({key:2})
    }
    else if(newValue==Bgimage3){
      setimg({key:3})
    }
    else{
      setimg({key:4})
    }
  }
            
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    let history = useHistory();
    function handleClick(path) {
       history.push(path);
       
   }
   const [color, setColor] = React.useState(''); //for background color change in presentation component
   const [textcolor, settextcolor] = React.useState('');
   const [opacity, setOpacity]=React.useState(100);
   const [component, setComponent] = React.useState('multiplechoice');
   const [state, setState] = React.useState({
   selectedFile: null,
   bgurl: ''
 });
 const [uri, setUri]=React.useState([{bgurl:''}]);

    const clickHandler=(e)=> {
        switch (e) {
          case "ranking":
                setComponent("ranking")
                console.log(component)
                break
            case "multiplechoice":
                setComponent("multiplechoice")
                console.log(component)
                break
            case "wordcloud":
               setComponent("wordcloud")
               console.log(component)
               break
            case "qanda":
              setComponent("qanda")
              console.log(component)
              break
            case "openended":
              setComponent("openended")
              console.log(component)
              break
            case "scales":
              setComponent("scales")
              console.log(component)
              break
           
        }
    }
   
   const classes = useStyles();
   const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };

  
    return (
        
        <Container className={classes.root} style={{width: '100%',height: '100%', display: "flex", justifyContent: "space-between", alignItems: "space-between", flexDirection: 'column'}}>
        <Container  style={{ display: "flex", justifyContent: "space-between", alignItems: "space-between", height: '100%', flexDirection:'row',  width: '100%' }}> 
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" >
            <Link to="/" style={{color:"black", textDecoration:"none" }} >
            <Typography style={{fontSize:"12px"}}> Services</Typography>
            </Link>
            <Link to="/polls" style={{color:"black", textDecoration:"none" }} >
            <Typography style={{fontSize:"12px"}}>Polls</Typography>
            </Link>
            <Typography style={{fontSize:"12px"}}>
                  Design
            </Typography>
           </Breadcrumbs> 
           <Button
                    variant="contained"
                    onClick={() => {handleClick("/link") }}
                             style={
                                 {
                                            backgroundColor: "#cc0000",
                                            color: "white",
                                            float: "right",
                                            border: "1px solid white",
                                            margin: "1% 0%",
                                           // marginRight: "-2%"
                                        }
                                    }
                                >Create Link
                            </Button>                     
                            </Container> 
     
       
                            <Container style={{ display: "flex", justifyContent: "space-between", alignItems: "space-between", height: '100%', flexDirection:'row',  width: '100%' }}>

  
     <Sidebar color={color} parentCallback={setColor}
     component={component} clickHandler={clickHandler} changecolor={settextcolor}
     setOpacity={setOpacity} opacity={opacity} togglePopup={togglePopup} setData1={setData1} data1={data1} data2={data2} setData2={setData2} 
     data3={data3} setData3={setData3} data4={data4} setData4={setData4} data5={data5} setData5={setData5} result={result} setResult={setResult} inputListMC={inputListMC} setInputListMC={setInputListMC}
    images={images} inputListScales={inputListScales} setInputListScales={setInputListScales} inputList4={inputList4} setInputList4={setInputList4} textcolor={textcolor} settextcolor={settextcolor}
    inputListRanking={inputListRanking} setInputListRanking={setInputListRanking} contentauth={props.contentauth} imgresult={imgresult} setImgResult={setImgResult} data6={data6} setData6={setData6} setState={setState} state={state} img={uri} setUri={setUri} BackgroundImage={img}/>
     
     <Presentation color={color} textcolor={textcolor} images={images} opacity={opacity} component={component} img={img} data1={data1} data2={data2} data3={data3} data5={data5} result={result}
      inputListRanking={inputListRanking} inputListMC={inputListMC}  inputListScales={inputListScales}  imgresult={imgresult} flex='1' data4={data4} data6={data6} state={state} img={uri}/>
     
     
    
     </Container>
     {isOpen && <Popup 
      content={<>
        <b style={{color: 'black', textAlign: 'center' }}>Background Images</b>
        
        <Grid container spacing={2} style={{margin: "4px"}}>
        <Grid item xs={6} sm={2} >
        <h7 style={{color: "black"}}>Add your own image</h7>
                     
                        
                          
                        
                        <Button 
                        className={classes.button}
                        size="small"
                        width="10px"
                        fullWidth={true}
                        name="choice"
                        style={{ width: '190px', position: 'relative', height: '60px', marginTop: '8%', marginLeft: '10%', backgroundColor: "white", color: "black"}}
                        placeholder="Enter choice" 
                          ><input type="file"  />
                        </Button>
                        <Button className={classes.button}
                            style={{borderRadius: "2em",
                                         size: 'small',
                                         fontSize: '11px',
                                         textAlign: 'center',
                                         position: 'relative',
                                         marginLeft: '17px',
                                         marginTop: '0px',
                                         width: '8%', background:"white",
                                         color:'black'}}
                                         
                                         >
                                           Set
                        </Button>
                    
      
                   
            </Grid>
                    <Grid item xs={6} sm={2} >
                      <CardActionArea onClick={()=>setimg(Bgimage1)}>
                    <CardMedia
              component="img"
              alt="Image1"
              height="100"
              width="250"
              image={Bgimage1}
              title="1"
              
            /> </CardActionArea>
            </Grid>
            
                    <Grid item xs={6} sm={2} >
                    <CardActionArea onClick={()=>setimg(Bgimage2)}>
                    <CardMedia
              component="img"
              alt="Image2"
              height="100"
              width="250"
              image={Bgimage2}
              title="2"
              
            /> </CardActionArea>
                    </Grid>
                   
           <Grid item xs={6} sm={2} >
           <CardActionArea  onClick={()=>setimg(Bgimage3)} >
          <CardMedia
              component="img"
              alt="Image3"
              height="100"
              width="250"
              image={Bgimage3}
              title="3"
             
            /></CardActionArea>
                    </Grid>
                    <Grid item xs={6} sm={2} ><Paper style={{width: '100px', height: '100px', marginTop: '15%', marginLeft: '60%'}}>
           <CardActions color='white' style={{height: '80px', marginLeft: '10%'}} >
             <Button onClick={()=>setimg(null)} ><NotInterestedIcon /></Button>
          </CardActions></Paper>
                    </Grid>
                </Grid>
  
      </>}
      handleClose={togglePopup}
    />}
    </Container>
   
    
    );
}

export default CreatePolls