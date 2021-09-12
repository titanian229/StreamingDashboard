import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

import { GlobalContextProvider } from "./context";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <GlobalContextProvider theme={theme}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
