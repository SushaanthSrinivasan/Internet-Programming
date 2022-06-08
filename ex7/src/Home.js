import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Home() {
  return (
    <>
        <Header />
        <div>
		    <img src={require("./images/me.jpg")} width = {500} height = {500} className = "shadow-box" />
	    </div>
        <Footer />
    </>
  )
}

export default Home