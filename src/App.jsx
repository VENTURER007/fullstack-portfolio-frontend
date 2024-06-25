import React, { useEffect, useState } from "react";
import { Divider, Box } from "@mui/material";
import axios from "axios";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HashLoader } from "react-spinners";

function App() {
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://full-stack-portfolio-backend-3b934311afd1.herokuapp.com/api/hero/")
      .then(response => {
        setHeroData(response.data);
        // Add a delay of 2 seconds before setting loading to false
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      })
      .catch(error => {
        setError("Error fetching the data");
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
        <HashLoader color="black" size={60} />
      </Box>
    );
  }

  return (
    <div>
      <Navbar name={heroData.name} />
      <HeroSection data={heroData} />
      <Divider>^_^</Divider>
      <Aboutme />
      <Divider>└(￣-￣)┘</Divider>
      <Projects />
      <Contact />
      <Footer socials={heroData.socials} />
    </div>
  );
}

export default App;
