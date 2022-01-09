import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../JS/actions/userAction";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <h1>Home page</h1>
      <button
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >logout</button>
    </div>
  );
};

export default Home;
