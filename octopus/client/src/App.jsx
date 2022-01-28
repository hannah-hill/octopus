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
  const [quantityCount, setQuantityCount] = useState(1)

  const addToBasket = (productId) => {
    const existingProduct = basket.find(
      (product) => product.productId === productId
    )
    existingProduct &&
      setBasket(
        basket.map((product) =>
          product.productId === productId
            ? { ...product, quantity: product.quantity + quantityCount }
            : product
        )
      )
    setBasket([...basket, { productId: productId, quantity: quantityCount }])
    setQuantityCount(1)
  }
  console.log(basket)

  return (
    <ApolloProvider client={client}>
      <>
        <Header basket={basket} />
        <ProductData
          quantityCount={quantityCount}
          setQuantityCount={setQuantityCount}
          addToBasket={addToBasket}
        />
        <Footer />
      </>
    </ApolloProvider>
  )
}

export default App
