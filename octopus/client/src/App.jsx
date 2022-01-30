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

  const addToBasket = (id, name, img, qty) => {
    setBasket([
      ...basket,
      { productId: id, name: name, img: img, quantity: qty },
    ])
  }

  // const addToBasket = (id, qty) => {
  //   const existingProduct = basket.find((product) => product.productId === id)
  //   console.log(existingProduct)
  //   if (existingProduct) {
  //     console.log('found one')
  //     setBasket(
  //       basket.map((product) =>
  //         product.productId === id
  //           ? { ...product, quantity: product.quantity + quantityCount }
  //           : product
  //       )
  //     )
  //   } else {
  //     setBasket([...basket, { productId: id, quantity: quantityCount }])
  //   }
  //   setQuantityCount(1)
  // }
  console.log(basket)

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
