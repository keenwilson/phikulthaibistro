import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.less'
import HomePage from './views/HomePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
