import React from 'react';
import { AppBar, Toolbar, Typography, Container, Link as MuiLink } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              My React App
            </Typography>
            <Typography variant="h6" component={Link} to="/blogs" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              Blogs
            </Typography>
            <Typography variant="h6" component={Link} to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              Contact
            </Typography>
          </Toolbar>
        </AppBar>

        <Container style={{ marginTop: '20px' }}>
          <Outlet />
        </Container>
      </>
  );
};

export default Layout;
