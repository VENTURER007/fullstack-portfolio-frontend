import  { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, CircularProgress, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import DescriptionIcon from "@mui/icons-material/Description";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://full-stack-portfolio-backend-3b934311afd1.herokuapp.com/api/projects/")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the projects data:", error);
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

  return (
    <Container id="projects-section" sx={{ mt: 4 }}>
      <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, textAlign: "center", mb: 4 }}>
        Projects
      </Typography>
      <Grid container spacing={4} direction="column">
        {projects.map((project, index) => (
          <Grid item xs={12} key={project.id}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }, alignItems: 'center' }}>
              <CardMedia
                component="img"
                image={project.project_image}
                alt={project.title}
                sx={{ width: { xs: '100%', md: '50%' }, height: { xs: 'auto', md: 'auto' } }}
              />
              <CardContent sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', textAlign:'center' }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Box mt={2} display="flex" flexWrap="wrap" justifyContent="center">
                  {project.tech_stacks.map((tech) => (
                    <Box key={tech.id} mr={1} mb={1}>
                      <img src={tech.logo_url} alt={tech.name} width="32" height="32" />
                    </Box>
                  ))}
                </Box>
                <Stack direction="row" spacing={2} mt={2}>
                  {project.github_url && (
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.github_url}
                      target="_blank"
                      rel="noopener"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.live_demo_url && (
                    <Button
                      variant="contained"
                      color="secondary"
                      href={project.live_demo_url}
                      target="_blank"
                      rel="noopener"
                      startIcon={<LaunchIcon />}
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.blog_url && (
                    <Button
                      variant="outlined"
                      color="inherit"
                      href={project.blog_url}
                      target="_blank"
                      rel="noopener"
                      startIcon={<DescriptionIcon />}
                    >
                      Blog
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
