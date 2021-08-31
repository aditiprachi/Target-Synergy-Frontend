import React from 'react'
import '../Main/Main.css'
import MainCards from '../MainCards/MainCards'

function Main({setAuth, auth , contentauth, setContentAuth}) {
    return (
        <div className="main">
            <h1 className="heading">Welcome to Target Synergy</h1>
            <p className="tagline">Helps provide instant solutions on opinions, feedback and polls from your targeted audience as their opinion matters.</p>
            <MainCards setAuth={setAuth} auth={auth} contentauth={contentauth} setContentAuth={setContentAuth}/>
        </div>
        
    )
}

export default Main
