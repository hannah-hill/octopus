import React from 'react'
import ProductData from './components/ProductData'
import Header from './components/Header'
import Footer from './components/Footer'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <Header />
        <ProductData />
        <Footer />
      </>
    </ApolloProvider>
  )
}

export default App
