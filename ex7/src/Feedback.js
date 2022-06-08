import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Feedback() {
  return (
    <>
        <Header />
        <div>
            <center>
            <img src={require("./images/me.jpg")} width = {100} height = {100} />
            <h1 className = "green">Feedback</h1>
                <form className = "red">
                    <label for="name">Name:</label>
                    <br/>
                    <input type="text" id="fname" name="fname" />
                    <br/><br/>
                    <label for="phone">Passwords:</label>
                    <br/>
                    <input type="password" id="pwd" name="pwd" />
                    <br/><br/>
                    <label for="lname">Feedback:</label>
                    <br/>
                    <input type="text" id="feedback" name="lname" />
                    <br/><br/>
                    <center className = "move">
                        <input type="submit" value="Submit" />
                    </center>
                </form>
            </center>
	    </div>
        <Footer />
    </>
  )
}

export default Feedback