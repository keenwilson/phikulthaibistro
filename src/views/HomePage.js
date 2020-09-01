import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Navbar } from './components'

export default function HomePage(params) {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </>
  )
}
