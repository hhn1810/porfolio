import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Head from 'next/head'
export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hà Hoàng Nguyên - Portfolio</title>
      </Head>
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}
