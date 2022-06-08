import React from 'react'

function Header() {
  return (
    <>
        <img src={require('../images/superman.png')} width = {64} height = {48} />
		<h2><a href="/" class = "nameheading txt-shadow"><p>Sushaanth Srinivasan</p></a></h2>
		<nav>
			<ul class = "green">
				<li><a class = "green" href="/info" target = "_blank">Personal Information</a></li>
				<li><a class = "green" href="/journey" target = "_blank">Journey to SSN</a></li>
				<li><a class = "green" href="/interests" target = "_blank">Area of Interest</a></li>
				<li><a class = "green" href="/academics" target = "_blank">Academic Proficiency</a></li>
				<li><a class = "green" href="/events" target = "_blank">Events Organized</a></li>
				<li><a class = "green" href="/feedback" target = "_blank">Feedback</a></li>
			</ul>
		</nav>
    </>
  );
}

export default Header