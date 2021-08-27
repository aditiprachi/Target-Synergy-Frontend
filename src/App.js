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
import ScalesUser from './components/Poll/CreatePoll/ParticipantType/ScalesUser'
import MCQ from './components/Poll/Results/MCQ'
import WordCloudUser from './components/Poll/CreatePoll/ParticipantType/WordCloudUser'
import WordCloud from './components/Poll/Results/WordCloud'
import CreateFeedback from './components/Feedback/CreateFeedback';
import CreateOpinions from './components/Opinions/CreateOpinions';
import DesktopBreakpoint from './components/responsive_utilities/desktop_breakpoint';
import PhoneBreakpoint from './components/responsive_utilities/phone_breakpoint';
//import { IdContext } from './IdContext';
import OpenEnded from './components/Poll/Results/OpenEnded'
import Scales from './components/Poll/Results/Scales'
import OpenEndedUser from './components/Poll/CreatePoll/ParticipantType/OpenEndedUser';
import Ranking from './components/Poll/CreatePoll/PollType/Ranking';
import RatingUser from './components/Poll/CreatePoll/ParticipantType/RatingUser'
import Rating from './components/Poll/Results/Rating'

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
          <Route path="/create-feedback" render={(props)=>(<CreateFeedback {...props}  contentauth={contentauth}/>)}/>
          <Route path="/create-opinions" render={(props)=>(<CreateOpinions {...props}  contentauth={contentauth}/>)}/>  
          
          
        <Route path="/610fbf5066e210524c8325a5" component={Ranking}/>
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
            path="/WC"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/:id`} component={WordCloudUser} exact />
                <Route exact path={`${url}/:id/results`} component={WordCloud} /> 
              </Switch>
            )}
          />
          <Route
            path="/QandA"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/:id`} component={QandAUser} exact />
                <Route exact path={`${url}/:id/results`} component={QandA} /> 
              </Switch>
            )}
          />
          <Route
            path="/SC"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/:id`} component={ScalesUser} exact />
                <Route exact path={`${url}/:id/results`} component={Scales} /> 
              </Switch>
            )}
          />
           <Route
            path="/RT"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/:id`} component={RatingUser} exact />
                <Route exact path={`${url}/:id/results`} component={Rating} /> 
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
          <Route
            path="/create-feedback"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/`} component={CreateFeedback} exact />
              </Switch>
            )}
          />
          <Route
            path="/create-opinions"
            render={({ match: { url } }) => (
             <Switch>
                <Route path={`${url}/`} component={CreateOpinions} exact />
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
