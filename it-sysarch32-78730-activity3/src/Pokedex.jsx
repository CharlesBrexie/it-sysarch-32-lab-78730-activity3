import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemonList(data));
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="pokedex">
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange("English")}>English</button>
        <button onClick={() => handleLanguageChange("Japanese")}>Japanese</button>
        <button onClick={() => handleLanguageChange("Chinese")}>Chinese</button>
        <button onClick={() => handleLanguageChange("French")}>French</button>
      </div>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;