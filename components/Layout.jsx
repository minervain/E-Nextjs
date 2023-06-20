import React from 'react'
import Nav from './navigation'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>AOU</title>
      
              <meta property="og:title" content="My page title" key="title" />
              </Head>

        <Nav/>
        <main>
        {children}
        </main>
    </div>
  )
}

export default Layout