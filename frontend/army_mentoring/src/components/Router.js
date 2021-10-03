import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Routes/Home";
import Community from "./Routes/Community";
import Mentoring from "./Routes/Mentoring";
import Mymentoringlist from "./Routes/Mymentoringlist";
import Mentoringintroduction from "./Routes/Mentoring/Mentoringintroduction";
import Makementoring from "./Routes/Mentoring/Makementoring";
import Mentoringspecificmento from "./Routes/Mentoring/Mentoringspecificmento";
import Mentoringspecificmentee from "./Routes/Mentoring/Mentoringspecificmentee";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MentorIntroduction from "./Routes/Mentoring/Mentorintroduction";
import Login from './Routes/Login';
import Profile from './Routes/Profile';

export default () => (
  
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/mentoring" component={Mentoring}></Route>
      <Route path="/mymentoringlist" component={Mymentoringlist}></Route>
      <Route path="/Community" component={Community}></Route>
      <Route path="/Mypage" component={Profile}></Route>
      <Route path="/mentorintro" component={MentorIntroduction}></Route>
      <Route path="/mentoringintro" component={Mentoringintroduction}></Route>
      <Route path="/makementoring" component={Makementoring}></Route>
      <Route path="/mentoringspecificmento" component={Mentoringspecificmento}></Route>
      <Route path="/mentoringspecificmentee" component={Mentoringspecificmentee}></Route>
    </Switch>
    <Footer />
  </BrowserRouter> 

);


