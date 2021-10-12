import React from 'react';
import config from '../firebase/config';
import './main.scss'

const Welcome = () => {
 return (
  <div className="profil-sity">
   <h1>Shaxsiy kabinet</h1>
   <button onClick={() => config.auth().signOut()}>Sign out</button>
  </div>
 );
};

export default Welcome;