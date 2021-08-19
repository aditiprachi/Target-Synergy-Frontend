import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PollIcon from '@material-ui/icons/Poll';
import CreateIcon from '@material-ui/icons/Create';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu

    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: '#cc0000',
      },
    
  
  },
}))(MenuItem);

export default function Service({setAuth, auth}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      console.log(auth)
}
  const onFailure = (res)=>{
        console.log('login failed', res);
        setAuth(false);
    }


  return (
    <div>
      { auth? (<Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        style={
          {
            backgroundColor: "#cc0000",
            color: "white",
            float: "left",
            border: "1px solid white",
            margin: "1px 10px"
          }
        }
        onClick={handleClick}
      >
        Services<ArrowDropDownIcon/>
      </Button>) : 
      (<GoogleLogin
        clientId="4565827063-vh8t8cgckg74git2dh3ulfq7fvd02gai.apps.googleusercontent.com"
        render={renderProps => (<Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        style={
          {
            backgroundColor: "#cc0000",
            color: "white",
            float: "left",
            border: "1px solid white",
            margin: "1px 10px"
          }
        }
        onClick={renderProps.onClick  } disabled={renderProps.disabled}>
        Services
      </Button>)} 
      buttonText="Gmail Login"
      onSuccess={onSuccess}
      onFailure={ onFailure}
      cookiePolicy={'single_host_origin'}
      uxMode="redirect"
      redirect_uri="http://localhost:3000/"
      isSignedIn={true}>
        </GoogleLogin>)}
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={
          {
            marginTop:"5px"
          }
        }
      >
              <Link to="/polls" style={{color:"black", textDecoration:"none"}}>
                <StyledMenuItem onClick={handleClose}>
                
                  <ListItemIcon>
                           
                    <PollIcon fontSize="small"  />
                    
                  </ListItemIcon>
                    <ListItemText primary="Polls" /> 
                  </StyledMenuItem>
              </Link>
              <Link to="/opinions" style={{color:"black", textDecoration:"none" }}>
              <StyledMenuItem onClick={handleClose}>
                  <ListItemIcon>
              <PeopleIcon fontSize="small" />
              </ListItemIcon>
                  <ListItemText primary="Opinions" />    
              </StyledMenuItem>
              </Link>
              <Link to="/feedback" style={{color:"black" , textDecoration:"none"}}>
              <StyledMenuItem onClick={handleClose}>
                  <ListItemIcon>
                  
                    <CreateIcon fontSize="small" />
                    
                  </ListItemIcon>
                  
                  <ListItemText primary="Feedback" />
                 
                  
              </StyledMenuItem>
              </Link>
          </StyledMenu>
    </div>
  );
}