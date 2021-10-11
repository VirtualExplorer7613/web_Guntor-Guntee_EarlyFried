import React, { useState } from "react"
import './App.css';
import Router from "./Router";

import {io} from "socket.io-client";

import { UserContext, SocketContext } from "../context/Context";
import { BACKEND } from "../CONST";
import { updateAxiosSettings } from "../backend/common";


const socket=io(BACKEND.CHATTING_SERVER_BASE_URL);

function App() {
    const [user, setUser] = useState({});

    updateAxiosSettings();

    return (
      <SocketContext.Provider value={socket}>
        <UserContext.Provider value={[user, setUser]}>
          <div className="App">
            <Router/>
          </div>
        </UserContext.Provider>
      </SocketContext.Provider>
  );
}

export default App;
