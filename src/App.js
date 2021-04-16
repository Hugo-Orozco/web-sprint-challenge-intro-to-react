import React, { useState, useEffect } from 'react';
import './App.css';

import Character from './components/Character';
import Axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  let Index = 1;

  const People = new URL('/api/people', 'https://swapi.dev')

  const Endpoint = [
    `${People.href}/${Index++}/`,
    `${People.href}/${Index++}/`,
    `${People.href}/${Index++}/`,
    `${People.href}/${Index++}/`,
    `${People.href}/${Index++}/`,
    `${People.href}/${Index++}/`,
    `${People.href}/${Index++}/`,
    `${People.href}/${Index++}/`,
    `${People.href}/${Index++}/`,
    `${People.href}/${Index++}/`,
  ];

  const Promises = [];

  // const [data, setData] = useState(null);

  // useEffect(() => {

  //   Axios.get(Endpoint[0]).then((Res) => {

  //     setData(Res.data);

  //   }).catch((Err) => {

  //     console.error(Err);

  //   });

  // });

  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const [name, setName] = useState(null);

  const Toggle = (temp) => {

    setName(temp);

    if (temp !== name) {
      setOpen(true);
    }

    else {
      setOpen(!open);
    }

  };

  const Request = (Endpoint) => new Promise((Resolve, Reject) => {

    Axios.get(Endpoint).then((Res) => {

      Resolve(Res.data);

    }).catch((Err) => {

      Reject(Err);

    });

  });

  Endpoint.forEach((URI) => {

    Promises.push(Request(URI));

  });

  useEffect(() => {

    Promise.all(Promises).then((Res) => {

      setData(Res);

    }).catch((Err) => {

      console.log(Err);

    });

  }, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars - Characters</h1>
      <div className='Character'>
        {data.map((data) => {
          return Character({ name: data.name, birth_year: data.birth_year, gender: data.gender, height: data.height, mass: data.mass, check: name, state: open, toggle: Toggle })
        })}
      </div>
    </div>
  );
}

export default App;
