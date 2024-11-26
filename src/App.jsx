import React, { useEffect, useState } from "react";
import { Divider, Box, LinearProgress } from "@mui/material";
import axios from "axios";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { HashLoader } from "react-spinners";
import { Helmet } from "react-helmet";

function App() {
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const preloadImages = (imageUrls) => {
    return Promise.all(
      imageUrls.map(
        (url) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          })
      )
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 90 ? prev + 10 : prev));
    }, 250);

    axios
      .get("https://full-stack-portfolio-backend-3b934311afd1.herokuapp.com/api/hero/")
      .then(async (response) => {
        const data = response.data;
        const imageUrls = [
          data.background_image,
          ...data.socials.map((social) => social.logo_url),
          ...data.tech_stack.map((tech) => tech.logo_url),
        ];

        try {
          await preloadImages(imageUrls); // Ensure all images are preloaded
          setHeroData(data);
          setProgress(100);
          setLoading(false);
        } catch (imageError) {
          console.error("Error preloading images", imageError);
          setError("Error loading images");
        } finally {
          clearInterval(interval);
        }
      })
      .catch((error) => {
        setError("Error fetching the data");
        console.error(error);
        clearInterval(interval);
        setLoading(false);
      });

    return () => clearInterval(interval);
  }, []);

  const title = loading
    ? `Loading... ${progress}%`
    : heroData?.name?.toLowerCase() || "My Portfolio";

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Helmet>
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://img.icons8.com/nolan/64/developer.png"
        />
        <title>{title}</title>
      </Helmet>
      {loading ? (
        <>
          <Box>
            {/* Progress Bar */}
            <LinearProgress variant="determinate" value={progress} />
            {/* Centered Spinner */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="calc(100vh - 4px)"
            >
              <HashLoader color="black" size={60} />
            </Box>
          </Box>
        </>
      ) : (
        <Box>
          <Navbar name={heroData.name} />
          <HeroSection data={heroData} />
          <Divider>^_^</Divider>
          <Aboutme />
          <Divider>└(￣-￣)┘</Divider>
          <Projects />
          <Contact />
          <Footer socials={heroData.socials} />
        </Box>
      )}
    </div>
  );
}

export default App;
