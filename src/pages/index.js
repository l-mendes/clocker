import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { useEffect, useState } from 'react';

import { Agenda } from '../components';
import { Login } from '../components';
import firebase from '../config/firebase';

export default function Home() {
  const [auth, setAuth] = useState({
    loading: true,
    user: false
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
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
