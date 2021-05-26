import { firebaseClient } from '../../config/firebase/client';
import { Button } from '@chakra-ui/button';

export const Agenda = () => {
  const logout = () => firebaseClient.auth().signOut();

  return (
    <div>
      <Button onClick={logout}>Sair</Button>
    </div>
  )
}
