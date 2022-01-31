import React, { useState } from 'react'
import ProductData from './components/ProductData'
import Header from './components/Header'
import Footer from './components/Footer'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
})

const App = () => {
  const [basket, setBasket] = useState([])

  const addToBasket = (productId, name, img, qty) => {
    setBasket([
      ...basket,
      { productId: productId, name: name, img: img, quantity: qty },
    ])
  }

  return (
    <ApolloProvider client={client}>
      <>
        <Header basket={basket} />
        <ProductData addToBasket={addToBasket} />
        <Footer />
      </>
    </ApolloProvider>
  )
}

export default App
