import React, { useState, useEffect } from 'react';
import Router from './main/header/router';

export default function App() {
  const [logIn, setlogIn] = useState(false);
  const [User, setUser] = useState('')
  useEffect(() => {
    fetch('http://localhost:8000').then(res => res.json()).then(res => {
      setUser(res.username);
      console.log(res.username)
    }).catch(err => {
      setUser('');
      console.log(err)
    })
  }, [])
  return (
    <>
      <Router User={User}/>
    </>
  );
}
