import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../src/components/login/Login";
import Home from "./components/Home/Home";
import { PrivateRoute } from "./router/PrivateRoute";
import { current } from "../src/JS/actions/userAction";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log(token)

  useEffect(() => {
    if (token) dispatch(current());
  }, [dispatch, token]);
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  );
};

export default App;
