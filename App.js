import React, { useEffect } from 'react';
import { firebaseApp } from './app/utils/firebase'
import Navigation from './app/navigations/Navigation';
import * as firebase from 'firebase';

export default function App() {
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged( user => {
      console.log(user)
    })
  }, [])
  
  return (
    <Navigation />
  );
}

