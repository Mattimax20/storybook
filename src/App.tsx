import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Hompage } from "./feature/homepage/view/hompage.view";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/hompage" />
          </Route>
          <Route
            path="/hompage"
            component={(props: any) => <Hompage {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
