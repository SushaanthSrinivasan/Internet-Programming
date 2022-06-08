import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function Academics() {
  return (
    <>
        <Header />
        <div>
            <img src={require("./images/me.jpg")} width = {100} height = {100} className = "smallimage" />
            <h1 className = "green textcenter">Academic Proficiency</h1>
            <table>
                <caption>Academic Details</caption>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Degree</th>
                        <th>Education</th>
                        <th>School/College</th>
                        <th>CGPA/Percentage</th>
                        <th>Year of passing</th>
                    </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>BE</td>
                    <td>CSE</td>
                    <td>SSN College of Engineering</td>
                    <td>9.12</td>
                    <td>2023</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td colspan="2">12th</td>
                    <td rowspan="2">Chinmaya Vidyalaya</td>
                    <td>96%</td>
                    <td>2019</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td colspan="2" >10th</td>
                    <td>10</td>
                    <td>2017</td>
                </tr>
            </tbody>
            </table>
	    </div>
        <Footer />
    </>
  )
}

export default Academics