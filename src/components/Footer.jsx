import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

const Footer = ({ socials }) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        py: 2,
        px: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" }, // Responsive flex direction
        mt:3,
      }}
    >
      {/* Left side - Copyright */}
      <Typography
        variant="body2"
        sx={{ flexGrow: 1, textAlign: { xs: "center", md: "left" } }}
      >
        Copyright &copy; {new Date().getFullYear()}. All rights are reserved.
      </Typography>

      {/* Right side - Social Icons */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {socials.map((social) => (
          <IconButton
            key={social.id}
            component={Link}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            sx={{ color: "inherit" }}
          >
            <img
              src={social.logo_url}
              alt={social.name}
              style={{ width: 30, height: "auto" }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
