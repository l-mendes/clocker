import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useEffect, useState } from 'react';

import { Agenda } from '../components';
import { Login } from '../components';
import { firebaseClient } from '../config/firebase/client';

export default function Home() {
  const [auth, setAuth] = useState({
    loading: true,
    user: false
  });

  useEffect(() => {
    firebaseClient.auth().onAuthStateChanged(user => {
      setAuth({
        loading: false,
        user
      });
    })
  },[]);

  if (auth.loading) {
    return (
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        <Spinner />
      </Box>
    );
  }

  return auth.user ? <Agenda /> : <Login />
}
