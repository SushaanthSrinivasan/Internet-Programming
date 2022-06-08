import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Info() {
  return (
    <>
        <Header />
        <div>
            <img src={require("./images/me.jpg")} width = {100} height = {100} className = "smallimage" />
            <h1 className = "green textcenter">About Me</h1>
            <p className = "green textcenter">
                I am currently studying B.E CSE in SSN College of Engineering.
            </p>
            <br/>
            <br/>
            <p classNameName = "green textcenter">
                <q className = "green">Innovation distinguishes between a leader and a follower.</q>
                <p className = "green textcenter">~Steve Jobs</p>
            </p>
	    </div>
        <Footer />
    </>
  )
}

export default Info