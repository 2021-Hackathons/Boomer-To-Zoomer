import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import ChatPage from "./views/ChatPage/ChatPage"
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import AddSessionForm from "./views/SessionPage/new-sessions.js"
import SessionsList from "./views/SessionPage/all-sessions.js"

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div className="content_wrapper" style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/chat" component={Auth(ChatPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/all-sessions" component={Auth(SessionsList, false)} />
          <Route exact path="/new-sessions" component={Auth(AddSessionForm, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
