import firebase from '../../config/firebase';
import { Button } from '@chakra-ui/button';

export const Agenda = () => {
  const logout = () => firebase.auth().signOut();

  return (
    <div>
      <Button onClick={logout}>Sair</Button>
    </div>
  )
}
