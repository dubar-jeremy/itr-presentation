import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Notification from './react-query/refetchOnWindowFocus/Notification';
import { Link } from 'react-router-dom';

const Nativation = () => {
  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: '#FFF',
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Link to='react-query' style={linkStyle}>
            React query
          </Link>
          <Link to='native' style={linkStyle}>
            Native
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Notification />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nativation;
