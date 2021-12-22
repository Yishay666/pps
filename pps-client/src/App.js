import React, { useState, useEffect } from 'react';
import Router from './main/header/router';

export default function App() {
  const [logIn, setlogIn] = useState(false);
  
  return (
    <>
      <Router logIn={logIn}/>
    </>
  );
}
