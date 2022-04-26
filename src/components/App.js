import '../styles/App.scss';
import friendsList from '../data/friends.json';
import { useState } from "react";

function App() {
  const [data, setData] = useState(friendsList);

  const htmlData = data.map((friend, index) => {
    return (
      <tr className='friend_phrase' key={index}>
        {friend.quote} - {friend.character}
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
        <tbody id="cuerpoTabla">
          {htmlData}
        </tbody>
      </table>
      <form action="|">
        <h2>Añadir una nueva frase</h2>
        Frase <input type="text" />
        Personaje <input type="text" />
        <input className="submitBtn" type="submit" value="Añadir" />
      </form>
    </div>
  );
}

export default App;
