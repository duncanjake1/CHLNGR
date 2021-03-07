import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./homepage.css"


import Homepage from "./components/Homepage.jsx"
import GetInfo from "./components/GetInfo.jsx";
import NewsFeed from "./components/NewsFeed.jsx"
import Post from "./components/Post.jsx"
import PageNotFound from "./components/PageNotFound.jsx"


function App(){
  return(
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/news-feed/:politics" exact component={NewsFeed}/>
          <Route path="/post/:politics/:id" exact component={Post}/>
          <Route path="/info/" exact component={GetInfo}/>
          <Route path="/" component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App