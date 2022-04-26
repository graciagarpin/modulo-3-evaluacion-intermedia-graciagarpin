import '../styles/App.scss';

function App() {
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
          {/* <td>
            <tr>hola</tr>
            <tr>hola</tr>
            <tr>hola</tr>
            <tr>hola</tr>
            <tr>hola</tr>
          </td>
          <td>
            <tr>hola</tr>
            <tr>hola</tr>
            <tr>hola</tr>
            <tr>hola</tr>
            <tr>hola</tr>
          </td> */}
        </tbody>
      </table>
      <form action="|">
        <h2>Añadir una nueva frase</h2>
        Frase <input type="text" />
        Personaje <input type="text" />
        <input
          className="submitBtn"
          type="submit"
          value="Añadir"
        />
      </form>
    </div>
  );
}

export default App;
