import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Interests() {
  return (
    <>
        <Header />
        <div>
            <img src={require("./images/me.jpg")} width = {100} height = {100} className = "smallimage" />
            <h1 className = "green textcenter">Interests</h1>

            <img src={require("./images/aimldl.png")} height="687" width="1000" usemap="#image-map" />
            <figcaption className = "green">Fig Caption: AI, ML and DL</figcaption>
            <map name="image-map">
                <area target="_blank" alt="AI" title="AI" href="https://en.wikipedia.org/wiki/Artificial_intelligence" coords="749,200,231,41" shape="rect" />
                <area target="_blank" alt="ML" title="ML" href="https://en.wikipedia.org/wiki/Machine_learning" coords="688,381,295,214" shape="rect" />
                <area target="_blank" alt="DL" title="DL" href="https://en.wikipedia.org/wiki/Deep_learning" coords="384,396,613,630" shape="rect" />
            </map>

            <h3 className = "green">Deep Learning</h3>
            <section>
                <article>
                    <p className = "green"><span className = "red">Deep learning</span> (also known as deep structured learning) is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised.</p>
                    <p className = "green">Deep-learning architectures such as deep neural networks, deep belief networks, deep reinforcement learning, recurrent neural networks and convolutional neural networks have been applied to fields including computer vision, speech recognition, natural language processing, machine translation, bioinformatics, drug design, medical image analysis, climate science, material inspection and board game programs, where they have produced results comparable to and in some cases surpassing human expert performance.</p>
                </article>
            </section>
            <br/>
            <section>
                <article>
                    <p className = "green"><span className = "red">Artificial neural networks (ANNs)</span> were inspired by information processing and distributed communication nodes in biological systems. ANNs have various differences from biological brains. Specifically, artificial neural networks tend to be static and symbolic, while the biological brain of most living organisms is dynamic (plastic) and analogue.</p>
                    <p className = "green">The adjective "deep" in deep learning refers to the use of multiple layers in the network. Early work showed that a linear perceptron cannot be a universal classNameifier, but that a network with a nonpolynomial activation function with one hidden layer of unbounded width can. Deep learning is a modern variation which is concerned with an unbounded number of layers of bounded size, which permits practical application and optimized implementation, while retaining theoretical universality under mild conditions. In deep learning the layers are also permitted to be heterogeneous and to deviate widely from biologically informed connectionist models, for the sake of efficiency, trainability and understandability, whence the "structured" part.</p>
                </article>
            </section>
	    </div>
        <Footer />
    </>
  )
}

export default Interests