import '../styles/App.scss';
import friendsList from '../data/friends.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(friendsList);
  const [newPhrase, setNewPhrase] = useState({
    quote: '',
    character: '',
  });
  const [select, setSelect] = useState("Elige personaje");
  const [search, setSearch] = useState("");

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
  }

  const handleSearch = (ev) => {
    setSearch(ev.target.value);
    console.log(search);
  }

  const htmlData = data
  .filter((friend)=>
  friend.quote.toLowerCase().includes(search.toLowerCase())
  )
  .filter((friend) => {
    if (select === "Elige personaje") {
      return true;
    }else if  (select === friend.character){
      return true;
    }else {
      return false;
    }
  
  }
  )
  .map((friend, index) => {
    return (
      <tr className="friend_phrase" key={index}>
        {`${friend.quote} - ${friend.character}`}
      </tr>
    );
  });

  return (
    <div>
      <h1>Frases de Friends</h1>
      <table>
        <thead>
          <tr>
            <th>
              Filtrar por frase
              <input type="search" className='search' autoComplete='off' name='search' placeholder='Busca' onChange={handleSearch} value={search}/>
            </th>
            <th>
              Filtrar por personaje
              <select onChange={handleSelect} value={select} id="">
                <option value="Elige presonaje">Elige presonaje</option>
                <option value="Ross">Ross</option>
                <option value="Monica">Monica</option>
                <option value="Joey">Joey</option>
                <option value="Phoebe">Phoebe</option>
                <option value="Chandler">Chandler</option>
                <option value="Rachel">Rachel</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody id="cuerpoTabla">{htmlData}</tbody>
      </table>
      <form action="|">
        <h2>Añadir una nueva frase</h2>
        Frase
        <input
          type="text"
          name="quote"
          id="quote"
          onChange={handleNewPhrase}
          value={handleNewPhrase.quote}
        />
        Personaje
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
