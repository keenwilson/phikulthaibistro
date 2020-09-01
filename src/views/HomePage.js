import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Navbar } from '../components'
import LandingPage from './LandingPage'
import MenuPage from './MenuPage'
import NotFoundPage from './NotFoundPage'
import OurStoryPage from './OurStoryPage'

export default function HomePage(params) {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/ourstory" component={OurStoryPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect from="*" to="/404" />
      </Switch>
    </>
  )
}
