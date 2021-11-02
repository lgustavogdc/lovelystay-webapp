import React from 'react'
import { ThemeProvider } from 'styled-components'
import Home from './pages/Home'
import theme from './styles/theme'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import User from './pages/User'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/user/:login">
          <User />
        </Route>
      </Switch>
    </ThemeProvider>
  )
}

export default App
