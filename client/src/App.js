import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import SocketPlayGround from "./components/SocketPlayGround";
import Chating from "./components/Chating";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/users/create">
          <CreateUser />
        </Route>
        <Route exact path="/socket">
          <SocketPlayGround />
        </Route>
        <Route exact path="/users/edit/:userId">
          <UpdateUser />
        </Route>
        <Route exact path="/chating">
          <Chating />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
