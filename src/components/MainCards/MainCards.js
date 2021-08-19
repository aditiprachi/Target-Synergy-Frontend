import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import polls from '../images/polling.png'
import opinion from '../images/opinion.png'
import feedback from '../images/feedback_1.png'
import '../MainCards/MainCard.css'
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const useStyles = makeStyles({
  root: {

    flexGrow: 1,
    borderSpacing: 2
  },
});
function MainCards({setAuth,auth}) {
  const classes = useStyles();
  
  const onSuccess = (res)=>{
    // console.log(res.profileObj);
    const data =  {
        googleId: res.profileObj.googleId,
        email: res.profileObj.email,
        name: res.profileObj.name
        
      }
      console.log(data);
        axios.post("http://localhost:8080/newUser", data)
        .then(r =>console.log("success"))
        .catch(err => { 
        console.error(err);
      });
      setAuth(true);
      
      
}
const onFailure = (res)=>{
        console.log('login failed', res);
        setAuth(false);
        
    }

  return (
    
<div>
 {!auth && <Card className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item md={2} spacing={8} >
        
      <GoogleLogin
        clientId="4565827063-vh8t8cgckg74git2dh3ulfq7fvd02gai.apps.googleusercontent.com"
        render={renderProps => (
        <CardActionArea  onClick={renderProps.onClick   } disabled={renderProps.disabled}   >
 
            <CardMedia
              component="img"
              alt="Polls"
              height="140"
              image={polls}
              title="Polls"
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Polls
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Get Instant Feedback with Online Polls

              </Typography>
            </CardContent>
          </CardActionArea>
           )}
           buttonText="Gmail Login"
           onSuccess={onSuccess}
           onFailure={ onFailure}
           cookiePolicy={'single_host_origin'}
           uxMode="redirect"
           redirect_uri="http://localhost:3000/"
           isSignedIn={true}
       >
       </GoogleLogin> 
       </Grid>
        <Grid item md={2} spacing={8}>

          <CardActionArea >
            <CardMedia
              component="img"
              alt="Polls"
              height="140"
              image={opinion}
              title="Opinions"
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Opinions
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Your opinion matters to make the right decision


              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item md={2} spacing={8}>

          <CardActionArea >
            <CardMedia
              component="img"
              alt="Polls"
              height="140"
              image={feedback}
              title="Feedback"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Feedback
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Share your thought as it matters

              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <CardActions>

        </CardActions>

      </Grid>
    </Card> }
    { auth &&(<Card className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item md={2} spacing={8} >
  
   
        <CardActionArea component={Link} to={"/polls"} >
 
            <CardMedia
              component="img"
              alt="Polls"
              height="140"
              image={polls}
              title="Polls"
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Polls
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Get Instant Feedback with Online Polls

              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item md={2} spacing={8}>

          <CardActionArea component={Link} to={"/opinions"}>
            <CardMedia
              component="img"
              alt="Polls"
              height="140"
              image={opinion}
              title="Opinions"
            />
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Opinions
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Your opinion matters to make the right decision


              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item md={2} spacing={8}>

          <CardActionArea component={Link} to={"/feedback"}>
            <CardMedia
              component="img"
              alt="Polls"
              height="140"
              image={feedback}
              title="Feedback"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Feedback
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Share your thought as it matters

              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <CardActions>

        </CardActions>

      </Grid>
    </Card>)}
    </div>
    
  );
}

export default MainCards
