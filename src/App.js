import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/New";
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  pagesize = 8;
  apikey = "bab82c564ea44ed9923b890220c2aeb0";

  state ={
    progress: 0
  }

  setprogress= (finalprogress)=>{
    this.setState({
      progress: finalprogress
    })
  }

  render() {

    return (
      <>
        <Router>
          <div>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
            <Navbar />
            <div style={{height: '60px'}}></div>

            <Switch>
              <div className="container">
                <Route key="science" exact path="/">
                  <News setprogress={this.setprogress} apikey={this.apikey} pagesize={this.pagesize} category="science" />
                </Route>
                <Route key="health" exact path="/health">
                  <News setprogress={this.setprogress} apikey={this.apikey} pagesize={this.pagesize} category="health" />
                </Route>
                <Route key="bussiness" exact path="/bussiness">
                  <News setprogress={this.setprogress} apikey={this.apikey} pagesize={this.pagesize} category="bussiness" />
                </Route>
                <Route key="entertainment" exact path="/entertainment">
                  <News setprogress={this.setprogress} apikey={this.apikey} pagesize={this.pagesize} category="entertainment" />
                </Route>
                <Route key="general" exact path="/general">
                  <News setprogress={this.setprogress} apikey={this.apikey} pagesize={this.pagesize} category="general" />
                </Route>
                <Route key="science" exact path="/science">
                  <News setprogress={this.setprogress} apikey={this.apikey} pagesize={this.pagesize} category="science" />
                </Route>
                <Route key="sports" exact path="/sports">
                  <News setprogress={this.setprogress} apikey={this.apikey} pagesize={this.pagesize} category="sports" />
                </Route>
                <Route key="technology" exact path="/technology">
                  <News setprogress={this.setprogress} apikey={this.apikey} pagesize={this.pagesize} category="technology" />
                </Route>
              </div>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
