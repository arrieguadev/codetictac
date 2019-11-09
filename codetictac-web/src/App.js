import React from "react";

import Routes from "./routes";
import "./App.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  toast.configure();
  return <Routes />;
};

export default App;
