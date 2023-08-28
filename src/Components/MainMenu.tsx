import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import PlaceIcon from '@mui/icons-material/Place';

const pages = ['Home', 'Jobs', 'Candidates', 'Recruiters', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const MainMenu = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{width: '85%', margin: 'auto', background: 'transparent', color: '#000'}}>
      <div style={{padding: '24px 0', display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '10px'}}>
          <PlaceIcon style={{color: 'green'}}/>
          <div>27/52 Avenue, NY USA 685</div>
        </div>
        <div style={{justifyContent: 'space-between', display: 'flex', color: '#000'}}>
          <div style={{border: '1px solid green', borderRadius: '50%', background: 'green', color: '#fff', fontWeight: 500, padding: '5px', width: '20px', textAlign: 'center', marginLeft: '5px'}}>F</div>
          <div style={{border: '1px solid green', borderRadius: '50%', background: 'green', color: '#fff', fontWeight: 500, padding: '5px', width: '20px', textAlign: 'center', marginLeft: '5px'}}>V</div>
          <div style={{border: '1px solid green', borderRadius: '50%', background: 'green', color: '#fff', fontWeight: 500, padding: '5px', width: '20px', textAlign: 'center', marginLeft: '5px'}}>S</div>
          <div style={{border: '1px solid green', borderRadius: '50%', background: 'green', color: '#fff', fontWeight: 500, padding: '5px', width: '20px', textAlign: 'center', marginLeft: '5px'}}>D</div>
        </div>
      </div>
      <AppBar position="static" style={{color: '#000'}}>
        <Container maxWidth="xl" style={{background: '#fff', color: '#000'}}>
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,  
                letterSpacing: '.3rem',
                color: 'green',
                textDecoration: 'none'      
              }}
            >
              JOBSLAB 
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'green',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <div style={{margin: 'auto'}}>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    style={{color: '#000'}}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}  
                  </Button>
                ))}
              </Box>
            </div>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings"> 
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> 
                  <PersonAddIcon style={{color: 'green', fontSize: 30, marginRight: 15}}/>
                  <Button variant="contained" style={{background: 'green', color: '#fff'}}>Post Job</Button>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}