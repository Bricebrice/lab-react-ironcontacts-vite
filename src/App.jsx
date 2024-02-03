import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(contacts.slice(0, 5));

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
          {people.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img src={actor.pictureUrl} />
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                <td>{actor.wonOscar ? <p>🏆</p> : <p></p>}</td>
                <td>{actor.wonEmmy ? <p>🌟</p> : <p></p>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
