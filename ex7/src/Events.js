import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Events() {
  return (
    <>
        <Header />
        <div>
            <img src={require("./images/me.jpg")} width = {100} height = {100} className = "smallimage" />
            <h1 className = "green textcenter">Events</h1>
            <h2 className = "red">Event 1</h2>
            <p className = "green">
                Lorem ipsum dolor sit amet. Quo cupiditate magni ea eaque ducimus aut dolores velit non autem internos et nesciunt ullam est consequatur unde.<br/>Eos similique quasi et quam autem ea quia provident et magnam aut excepturi totam qui molestiae minus.
            </p>	
            <p className = "green">
                Sit sint voluptates ut voluptas molestiae et delectus consectetur vel consequuntur quos et odio consequatur.<br/>Qui temporibus tempora eum delectus consequuntur ea deleniti officiis.
            </p>
            <details className = "green">
                <summary className = "green">Extra Information</summary>
                <p className = "green">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </details>

            <br/><br/><br/>
            <h2 className = "red">Event 2</h2>
            <p className = "green">
                Artificial Intelligence (AI), Data Science (DS), and Machine Learning (ML) are the pillars of the Fourth Industrial Revolution, or what is commonly known as Industry 4.0. AI is a branch of Computer Science that deals with the ability of a machine to closely imitate intelligent human behavior. ML is an application of AI that is based on the idea that when machines are provided new data, they can learn, grow, and develop on their own without explicit human intervention/programming. DS, on the other hand, is an umbrella term that signifies techniques used to extract useful information and insights from data.
            </p>	
            <p className = "green">
                Today, the importance of AI-ML is being felt in almost every domain. Therein arises the need for students to be AI-ML proficient. <br/>CL and Inova have arranged this workshop to create an awareness among students about a future in machine learning and to get students prepared for a bright career in machine learning.
            </p>
            <ol className = "green" type = "a">
                <li className = "green">Lorem ipsum dolor sit amet. Quo cupiditate magni ea eaque ducimus aut dolores velit non autem internos et nesciunt ullam est consequatur unde.</li>
                <li className = "green">
                    <ul className = "green">
                        <li className = "green">Sit sint voluptates ut voluptas molestiae et delectus consectetur vel consequuntur quos et odio consequatur.<br/>Qui temporibus tempora eum delectus consequuntur ea deleniti officiis.</li>
                        <li className = "green">Sit sint voluptates ut voluptas molestiae et delectus consectetur vel consequuntur quos et odio consequatur.<br/>Qui temporibus tempora eum delectus consequuntur ea deleniti officiis.</li>
                    </ul>
                </li>
            </ol>
	    </div>
        <Footer />
    </>
  )
}

export default Events