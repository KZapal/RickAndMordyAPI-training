import React, { useState, useEffect } from 'react';
import fetchData from './data/singeChar';

import Searchbar from './Searchbar/Searchbar';

import css from './App.module.css';
import fetchAllChar from './data/allChar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [allCharList, setAllCharList] = useState([]);

  useEffect(() => {
    const getAllChar = async () => {
      const { data } = await fetchAllChar();
      setAllCharList(data.results);
    };

    getAllChar();
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setCharacterData(null);
      return;
    }

    const getChar = async () => {
      const data = await fetchData(searchQuery);
      setCharacterData(data);
    };

    getChar();
  }, [searchQuery]);

  const onChangeQuery = query => {
    setSearchQuery(query);
  };

  return (
    <div className={css.App}>
      <Searchbar onChangeQuery={onChangeQuery} />

      {!searchQuery.length && (
        <div>
          <h2>All Characters:</h2>
          {allCharList.map(char => (
            <p key={char.id}>{char.name}</p>
          ))}
        </div>
      )}

      {characterData && (
        <div>
          <h2>Character Information:</h2>
          <div>Name: {characterData[0].name}</div>
          <div>Species: {characterData[0].species}</div>
          <div>Status: {characterData[0].status}</div>
          <div>
            <img src={characterData[2].image} alt={characterData[0].name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
