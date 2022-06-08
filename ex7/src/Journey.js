import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Journey() {
  return (
    <>
        <Header />
        <div>
            <h1 className = "green textcenter">Journey to SSN</h1>
            <img src={require("./images/me.jpg")} width = {100} height = {100} className = "smallimage" />
        </div>

        <div>
            <p className = "green">6.05am Korattur (G3 Police Station) \ 6.06am Post Office\6.12am Korattur Signal\6.13am TVS BS\6.14am Annanagar W.Depot\6.18am Blue Star (Saravanabhavan)\6.23am Maduravoyal Erikarai\7.40am College.(via) Tambaram Bypass Road</p>
        </div>
        
        <div className="gallery">
            <img src={require("./images/ssn.jpg")} alt="SSN" width={600} height={290} />
        </div>
        
        <div className="gallery">
            <img src={require("./images/ssn.jpg")} alt="SSN" width={600} height={290} />
        </div>
        
        <div className="gallery">
            <img src={require("./images/ssn.jpg")} alt="SSN" width={600} height={290} /> 
        </div>
        
        <div className="gallery">
            <img src={require("./images/ssn.jpg")} alt="SSN" width={600} height={290} />
        </div>
        <Footer />
    </>
  )
}

export default Journey