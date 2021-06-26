import React, { useEffect, useState } from "react";
import './App.css';
import Info from "./HeroInfo";

function App() {
  const TOKEN = '228463595783333';
  const [heroes, setHero] = useState([]);
  const [search, searchheroes] = useState("");
  const [query, setQuery] = useState("Batman");

  const URL = `https://www.superheroapi.com/api.php/${TOKEN}/search/${query}`;


  //Evita que se repita la carga de datos
  useEffect(() => {
    if(query!=""){
      getHero();
    }
  }, [query]);

  //Toma la lista de los heroes
  async function getHero() {
    const response = await fetch(URL);
    const data = await response.json();
    setHero(data.results);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  const updateSearch = e => {
    searchheroes(e.target.value);
  }

  if (heroes != undefined) {

    return (
      <div className="content">
        <form onSubmit={getSearch} className="search-form">
          <input placeholder="Search..." type="text" className="search-bar" value={search} onChange={updateSearch} autoFocus/>
          <button className="search-button" type="submit">Go</button>
        </form>
        <div className="container">
          {
            heroes.map(hero => (
              <Info name={hero.name} powerStats={hero.powerstats} biography={hero.biography} image={hero.image.url} />
            ))
          }
      </div>
      </div>
    );
  } else {
    return (
          <form onSubmit={getSearch} className="search-form">
          <input placeholder="Search..." type="text" className="search-bar" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">Go</button>
          <div>Super Hero not found</div>
        </form>
    );
  }
}

export default App;
