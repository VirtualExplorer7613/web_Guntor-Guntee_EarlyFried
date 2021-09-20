import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Routes/Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


export default () => (
    
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={about}></Route>
          <Route path="/community" component={community}></Route>
          <Route path="/qna" component={qna}></Route>
          <Route path="/mypage" component={mypage}></Route>
        </Switch>
        <Footer />
    </BrowserRouter> 

  );


  
  function about() {
    return <div>about</div>;
  }
  
  function community() {
    return <div>community</div>;
  }
  function qna() {
    return <div>qna</div>;
  }
  function mypage() {
    return <div>mypage</div>;
  }