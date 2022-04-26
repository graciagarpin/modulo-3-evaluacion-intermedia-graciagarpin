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
          <td>
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
          </td>
        </tbody>
      </table>
    </div>
  );
}

export default App;
