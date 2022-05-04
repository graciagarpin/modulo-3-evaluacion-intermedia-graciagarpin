import '../styles/App.scss';
import friendsList from '../data/friends.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(friendsList);
  const [newPhrase, setNewPhrase] = useState({
    quote: '',
    character: '',
  });
  const [select, setSelect] = useState('Todos');
  const [search, setSearch] = useState('');

  // const [newCharacter, setNewCharacter] = useState (friendList)

  const handleNewPhrase = (ev) => {
    setNewPhrase({
      ...newPhrase,
      [ev.target.id]: ev.target.value,
    });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newPhrase]);
    setNewPhrase({
      quote: '',
      character: '',
    });
  };

  const handleSelect = (ev) => {
    setSelect(ev.target.value);
  };

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
    console.log(search);
  };

  const htmlData = data
    .filter((friend) =>
      friend.quote.toLowerCase().includes(search.toLowerCase())
    )
    .filter((friend) => {
      if (select === 'Todos') {
        return true;
      } else if (select === friend.character) {
        return true;
      } else {
        return false;
      }
    })
    .map((friend, index) => {
      return (
        <li className="friend_phrase" key={index}>
          {`${friend.quote} - ${friend.character}`}
        </li>
      );
    });

  return (
    <div>
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <form action="">
        <label htmlFor="search">Filtrar por frase</label>
        <input
          type="search"
          id="search"
          className="search"
          autoComplete="off"
          name="search"
          placeholder="Busca"
          onChange={handleSearch}
          value={search}
        />

        <label htmlFor="select">Filtrar por personaje</label>
        <select onChange={handleSelect} value={select} id="select">
          <option value="Todos">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
      </form>
      <ul id="cuerpoTabla">{htmlData}</ul>

      <form action="|">
        <h2>Añadir una nueva frase</h2>
        <label htmlFor="quote">Frase</label>
        <input
          type="text"
          name="quote"
          id="quote"
          onChange={handleNewPhrase}
          value={handleNewPhrase.quote}
        />
        <label htmlFor="character">Personaje</label>
        <input
          type="text"
          name="character"
          id="character"
          onChange={handleNewPhrase}
          value={handleNewPhrase.character}
        />
        <input
          className="submitBtn"
          type="submit"
          value="Añadir"
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default App;
