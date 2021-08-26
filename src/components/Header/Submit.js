import React from 'react'
import Button from '@material-ui/core/Button';
import {useHistory,Link} from 'react-router-dom';

function Home({code}) {
    let url = `/${code}`;
    let history = useHistory();
    function handleClick(path) {
       history.push(path);
       window.location.reload();
       

    
       
   }
   
   console.log(url)
    return (
        <div>
           
            <Button
                variant="contained"
                onClick={() => {handleClick( `${url}`)}}
                style={
                    {
                        backgroundColor: "#cc0000",
                        color: "white",
                        position: "relative",
                        border: "1px solid white",
                        margin: "3px",
                        
                    }
                }
            >Submit</Button>
           
        </div>
    )
};

export default Home