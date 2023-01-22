//import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Botcollection from './components/BotCollection';
import BotArmy from './components/BotArmy';


export default function App() {
  const botsAPI = 'http://localhost:3000/bots'
  const [bots, setBots] = useState([]);



  useEffect(() => {
    fetch(botsAPI)
    .then(res => res.json())
    .then(setBots)
  }, []);
  
  return (
    <div>
      <Botcollection bots= {bots}/>
      <BotArmy />
     
    </div>
  );
}


