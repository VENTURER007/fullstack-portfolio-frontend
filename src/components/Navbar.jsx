import React from "react";
import { Stack, AppBar, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";


export default function Navbar({ name }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      sx={{ borderRadius: "10px", background: "white", color: "black" }}
      position="static"
    >
      <Toolbar sx={{ justifyContent: isMobile ? "center" : "space-between" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.25rem",
              xl: "2.5rem",
            },
          }}
        >
          {name.toUpperCase()}
        </Typography>
        {!isMobile && (
          <Stack spacing={3} direction="row">
            {["About Me", "Projects", "Contact"].map((text) => (
              <Typography
                key={text}
                variant="h6"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1rem",
                    md: "1.25rem",
                    xl: "1.5rem",
                  },
                  cursor: "pointer"
                }}
                onClick={() => handleScrollToSection(text.replace(" ", "-").toLowerCase() + "-section")}
              >
                {text}
              </Typography>
            ))}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}
