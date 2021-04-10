import firebase from '../firebase';

function Logout() {
  firebase.auth().signOut();
  // setAuthy(false);
}

export default Logout;
