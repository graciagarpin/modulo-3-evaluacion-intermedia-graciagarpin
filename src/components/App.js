import '../styles/App.scss';
import friendsList from '../data/friends.json';
import { useState } from 'react';


function App() {



  const [data, setData] = useState(friendsList);
  const [newPhrase, setNewPhrase] = useState({
    quote: '',
    character: '',
  });

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

  const htmlData = data.map((friend, index) => {
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
              <input type="text" />
            </th>
            <th>
              Filtrar por personaje
              <input type="text" />
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
