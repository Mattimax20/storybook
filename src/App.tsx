import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Gallery } from "./feature/gallery/view/gallery.view";
import { Hompage } from "./feature/homepage/view/hompage.view";
import { FooterElement } from "./feature/shared/footer";
import { NavbarComponent } from "./feature/shared/navbarComponent";

function App() {
  return (
    <>
     <NavbarComponent />
        
        <Switch>
          <Route exact path="/">
            <Redirect to="/hompage" />
          </Route>
          <Route
            path="/hompage"
            component={(props: any) => <Hompage {...props} />}
          />
           <Route
            path="/gallery"
            component={(props: any) => <Gallery {...props} />}
          />
        </Switch>
     
      <FooterElement />
    </>
  );
}

export default App;
