import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const TOKEN = '228463595783333';
  const HERO = "batman";

  const URL = `https://www.superheroapi.com/api.php/${TOKEN}/search/${HERO}`;

  //const [hero, SearchHero] = useState("");

  useEffect( async () => {
    getHero();
  },[]);

  async function  getHero () {
    const response = await fetch(URL);
    const data = response.json();
    const promise = Promise.resolve(data);
    let val = null;
    promise.then((value)=>{
      val=(value.results);

    for (let i = 0; i < val.length; i++) {
      let element = val[i];
      console.log(element.name)
    }
    });

  }

  return (
    <div className="content">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button" type="submit">Buscar</button>
      </form>
    </div>
  );

}

export default App;
 