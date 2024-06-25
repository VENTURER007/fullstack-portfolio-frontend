import React, { useEffect, useState } from "react";
import { Box, Typography, Container, CircularProgress } from "@mui/material";
import axios from "axios";

const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://full-stack-portfolio-backend-3b934311afd1.herokuapp.com/api/aboutme/")
      .then((response) => {
        setAboutMeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the about me data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (!aboutMeData) {
    return <Typography variant="h6" color="error">Failed to load about me data.</Typography>;
  }

  return (
    <Container id='about-me-section' sx={{ mt: 4 }}>
      <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, textAlign: "center", mb: 2 }}>
        Aboutme
      </Typography>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" justifyContent="center">
        <Box flex={1} p={2}>
          <img
            src={aboutMeData.styling_image}
            alt="Styling"
            style={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box flex={1} p={2}>
        <Typography variant="h4" sx={{ fontSize: { xs: "1.5rem", md: "2rem" }, textAlign: "centeleftr", mb: 2 }}>
        {aboutMeData.title}
      </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {aboutMeData.main_description}
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {aboutMeData.sub_description}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;
