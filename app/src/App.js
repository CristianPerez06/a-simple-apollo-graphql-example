import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, PageNotFound } from '../src/components'
import { User } from '../src/scenes/User'

// API
import apolloClient from './api'

// Apollo
import { ApolloProvider } from 'react-apollo'

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className='App w-100 h-100'>
        <Router>
          <Switch>
            <Route path='/' exact name='Home' component={Home} />
            <Route path='/user' name='User' component={User} />
            <Route name='Page Not Found' component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  )
}

export default App
