import React from "react";
import { Box, Typography, Container, Stack, Link } from "@mui/material";

const HeroSection = ({ data }) => {
  return (
    <Stack direction="column" mb="5rem">
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 4, md: 8 }}
        sx={{
          mt: { xs: "2rem", md: "4rem" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box>
          <Container>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                mb: 2,
              }}
            >
              {data.role}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                mb: 2,
              }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              }}
            >
              {data.description}
            </Typography>
            {/* Social Media Links */}
            <Box
              sx={{
                mt: 4,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {data.socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mx: 1 }}
                >
                  <Box
                    component="img"
                    src={social.logo_url}
                    alt={social.name}
                    sx={{ width: 40, height: 40 }}
                  />
                </Link>
              ))}
            </Box>
          </Container>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: { xs: "60%", sm: "50%", md: "45%", lg: "35%", xl: "25%" },
            mt: { xs: 4, md: 0 },
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: 3,
            flexShrink: 0,
            aspectRatio: "1 / 1",
          }}
        >
          <Box
            component="img"
            src={data.background_image}
            alt="Hero image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Stack>

      {/* Tech Stacks */}

      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center" },
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1">Tech Stacks | </Typography>
        {data.tech_stack.map((tech) => (
          <Box
            key={tech.id}
            component="img"
            src={tech.logo_url}
            alt={tech.name}
            sx={{
              width: { xs: 40, sm: 40, lg: 50, xl: 50 },
              height: { xs: 40, sm: 40, lg: 50, xl: 50 },
              mx: 1,
              my: 1,
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default HeroSection;
