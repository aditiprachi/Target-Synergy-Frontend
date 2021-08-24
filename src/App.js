import React,{useState,useContext} from 'react'
import './App.css';
import Main from './components/Main/Main';
import Poll from './components/Poll/Poll';
import Header from './components/Header/Header';
import Opinions from './components/Opinions/Opinions';
import Feedback from './components/Feedback/Feedback';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CreatePoll from './components/Poll/CreatePoll/CreatePoll';
import CreatePolls from './components/Poll/CreatePoll/CreatePolls';
import Vote from './components/Poll/CreatePoll/ParticipantType/Vote';
import QandA from './components/Poll/Results/QandA';
import QandAUser from './components/Poll/CreatePoll/ParticipantType/QandAUser';
import Scales from './components/Poll/Results/Scales'
import WordCloud from './components/Poll/Results/WordCloud'
import MCQ from './components/Poll/Results/MCQ'
import WordCloudUser from './components/Poll/CreatePoll/ParticipantType/WordCloudUser'

import DesktopBreakpoint from './components/responsive_utilities/desktop_breakpoint';
import PhoneBreakpoint from './components/responsive_utilities/phone_breakpoint';
//import { IdContext } from './IdContext';
import OpenEnded from './components/Poll/Results/OpenEnded'
import ImageMcq from './components/Poll/CreatePoll/ParticipantType/ImageMcq'
import OpenEndedUser from './components/Poll/CreatePoll/ParticipantType/OpenEndedUser';
import ImageChoice from './components/Poll/CreatePoll/PollType/ImageChoice';
import MultipleChoice from './components/Poll/CreatePoll/PollType/MultipleChoice';

export const IdContext = React.createContext();
function App() {
  const [ auth, setAuth]=useState(false)
  const [ contentauth, setContentAuth ] =useState()
  const [id, setId] = useState("");
  const [textBased , setTextBased] = useState({question:'', choices:[]})
  
  return (
    <div>
    <DesktopBreakpoint>
    <BrowserRouter>
    <div className="App">
        <Header setAuth={setAuth} auth={auth} setContentAuth={setContentAuth} contentauth={contentauth}/>
        <Switch>
          <Route exact path="/" render={(props)=>(<Main {...props} setAuth={setAuth} auth={auth} />)} />
         <Route path="/polls" component={Poll}/> 
          <Route path="/opinions" component={Opinions}/>
          <Route path="/feedback" component={Feedback}/>
          <IdContext.Provider
                value={{
                id,
                setId
                }}>
          <Route path="/link" component={CreatePoll} />
          <Route path="/create-poll" render={(props)=>(<CreatePolls {...props}  contentauth={contentauth}/>)}/>  
         <Route path="/36" component={Scales}/>
         {/* <Route path="/29" component={MultipleChoice}/> */}
        <Route path="/610fbf5066e210524c8325a5" component={ImageChoice}/>
          <Route
            path="/MCQ"
            render={({ match: { url } }) => (
             <Switch> 
                <Route exact path={`${url}/:id`} component={Vote} />  
                <Route exact path={`${url}/:id/results`} component={MCQ} />  
              </Switch>
            )}
          />
          <Route
            path="/OE"
            render={({ match: { url } }) => (
             <Switch> 
                <Route exact path={`${url}/:id`} component={OpenEndedUser} />
                <Route exact path={`${url}/:id/results`} component={OpenEnded} />  
              </Switch>
            )}
          />
          <Route
            path="/imageChoice"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/:id`} component={ImageChoice} exact />
              </Switch>
            )}
          />
          <Route
            path="/WC"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/:id`} component={WordCloudUser} exact />
              </Switch>
            )}
          />
          <Route
            path="/QandA"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/:id`} component={QandAUser} exact />
              </Switch>
            )}
          />
         </IdContext.Provider>
        </Switch> 
    </div>
    </BrowserRouter>
    </DesktopBreakpoint>
    <PhoneBreakpoint>
    <BrowserRouter>
   
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/polls" component={Poll}/>
          <Route path="/opinions" component={Opinions}/>
          <Route path="/feedback" component={Feedback}/>
          <Route path="/link" component={CreatePoll}/> 
          <Route
            path="/create-poll"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/`} component={CreatePolls} exact />
              </Switch>
            )}
          />
          <Route path="/231" component={OpenEndedUser}/>
        </Switch> 
    </div>
    </BrowserRouter>
    </PhoneBreakpoint>
    </div>
  );
}

export default App;
