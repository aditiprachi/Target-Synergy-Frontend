import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import "../Poll/Poll.css";
import { Link } from 'react-router-dom';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import pollimage from '../images/bgimage_2.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

const Poll = (props) => {
    const classes = useStyles();
    // console.log(props);
    const a = props.contentauth;
console.log(a);
    const auth = props.auth;
    const history = useHistory();
    const u = props.match.params.id;
    const [textBased , setTextBased] = useState({id:[], type:[]})
    const choice=[];
    const [polls,setpolls]=useState({polls:[]})
    useEffect(async () => {
        await axios.get(`https://targetsynergy-backend.herokuapp.com/${a}/OE`)
        .then(res=>{
            // console.log(res.data)
                setpolls({polls:res.data});
                console.log(polls.polls);
                // res.data.map((post,key)=>(
                //     choice[key]=({id:(post.id),type:post.type})
                // ))
        })
        // console.log(choice)
      },[a])
      polls.polls.map((post,key)=>(
            choice[key]=({id:(post.id),type:post.type})
        ))
    let ans=[...choice]
    console.log(ans)


    return (
        
            <div className={classes.root}>


            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb"
            style={{ margin:'10px'}}>
            
             <Link to="/" style={{color:"black", textDecoration:"none" }} >
             <Typography style={{fontSize:"12px"}}> Services</Typography>
             </Link>
             <Typography style={{fontSize:"12px"}}>
                   Polls
             </Typography>
            </Breadcrumbs>
            

                <Grid container spacing={3} style={{margin: "10px"}}>
                    <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper} 
                            style={{
                                border: "1px solid black",
                                width: "250px",
                                height: "150px"
                    }}>
                        <Link to='/create-poll'><AddCircleIcon style={{fontSize:"3rem" , margin:"50px"}}/></Link>
                    </Paper>
                    </Grid>
                    {ans.map((x,i)=>{
                         return (
                             
                             <Grid item xs={6} sm={3}>
                                 
                            <Paper className={classes.paper} 
                            style={{
                                border: "1px solid black",
                                width: "250px",
                                height: "150px",
                                backgroundImage: `url(${pollimage})`,
                                backgroundPosition: 'center', 
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                                
                    }}>
                        <h2>{x.type}</h2>
                        <Link to={`/${x.type}/${x.id}`}><TouchAppIcon style={{fontSize:"3rem" }}/></Link>
                    </Paper>
                    </Grid>
                          
                          )

})}
                </Grid>
            </div>
       
        
    )
}

export default Poll
