import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://full-stack-portfolio-backend-3b934311afd1.herokuapp.com/api/contact/')
      .then(response => {
        setContactData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><CircularProgress /></Box>;
  if (error) return <Box display="flex" justifyContent="center" alignItems="center" height="100vh"><Typography variant="h6" color="error">Error fetching contact data</Typography></Box>;

  return (
    <Box
      id="contact-section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={4}
      textAlign="center"
    >
      <Paper elevation={3} sx={{ padding: 4, width: '95%' }}>
        <Typography variant="h5" gutterBottom>
          {contactData.title}
        </Typography>



        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <EmailIcon sx={{ mr: 1 }} />
          <Link href={`mailto:${contactData.email}`} underline="hover" variant="subtitle1">
            {contactData.email}
          </Link>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <LocationOnIcon sx={{ mr: 1 }} />
          <Typography variant="subtitle1">
            {contactData.location}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Contact;
