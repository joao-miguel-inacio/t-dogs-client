import React from 'react';
import Navbar2 from "../../components/Navbar2/Navbar2";
import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		document.getElementById("about").classList.add("selected");
		return () => {
			document.getElementById("about").classList.remove("selected");
		  };
		}, []);
  return (
		<>	
			<Navbar2 page = "About" />
			<p>About</p>
		</>
	)
}

export default About