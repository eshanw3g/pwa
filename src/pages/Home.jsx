import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Badge, Box, Stack } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import { clearSession } from '../functions/session';
import { toUpper } from 'lodash';

function Home() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    console.log('public url is', process.env.PUBLIC_URL);
  }, []);

  const signOut = () => {
    clearSession();
    navigate(0, {
      replace: true
    });
  };

  return (
    <Box>
      <Stack
        direction="row"
        bgcolor="white"
        py={30}
        px={45}
        justifyContent="end"
        alignItems="center"
        gap={30}>
        <Badge badgeContent={4} color="error">
          <Notifications color="primary" />
        </Badge>
        <Box color="#ff5722" onClick={signOut}>
          <Avatar>{toUpper(user?.first_name[0])}</Avatar>
        </Box>
      </Stack>
    </Box>
  );
}

export default Home;
