import firebaseServer from 'firebase-admin';

const app = firebaseServer.apps.length
  ? firebaseServer.app()
  : firebaseServer.initializeApp({
    credentials: firebaseServer.credential.cert({

    })
  });

  export { firebaseServer };
