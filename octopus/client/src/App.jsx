import React from 'react'
import { ProductData } from './Products'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <h1>Hello World</h1>
        <ProductData />
      </>
    </ApolloProvider>
  )
}

export default App
