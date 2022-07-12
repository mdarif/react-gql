import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

// GraphQL Server, there is always going to be one route only:
// https://rickandmortyapi.com/graphql

/**
 * Apollo Client
 * @uri: GraphQL Server URI, specifies the URL of our GraphQL server
 * @cache: InMemoryCache, it's an instance of InMemoryCache, which Apollo
 * Client uses to cache query results after fetching them
 */
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)
