import React from 'react'
import {Switch, Route} from 'react-router-dom'
import * as views from "../views"

const Routes = props => (
  <Switch>
    <Route 
      exact path="/" 
      component={views.Home} 
    />

    // Insert views here

    


  </Switch>
)

export default Routes
