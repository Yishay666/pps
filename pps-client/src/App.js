import React, { useState, useEffect } from 'react';
import Nav from './main/nav';

export default function App() {
  const [logIn, setlogIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setlogIn({username: 'Yishay'})
    }, 2000)
  }, []);
  
  return (
    <>
      <Nav logIn={logIn}/>
    </>
  );
}
