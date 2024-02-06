import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    // Clone the array (5 contacts)
    const clonedPeople = [...people];
    // console.log("clonedPeople", clonedPeople);

    // Filter contacts that are already displayed (52 - 5 = 47 remaining contacts)
    const remainingContacts = contacts.filter((contact) => {
      for (let i = 0; i < clonedPeople.length; i++) {
        if (clonedPeople[i].id === contact.id) {
          return false;
        }
      }
      return true;
    });
    // console.log("allContacts", contacts);
    // console.log("remainingContacts", remainingContacts);

    // Random selection
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    // console.log("randomContact", randomContact);

    // Add random contact to the cloned array
    clonedPeople.push(randomContact);
    // console.log("clonedPeople", clonedPeople);

    // Finally, update the people variable through the function
    setPeople(clonedPeople);
  };

  console.log("people", people); // See the output of clicking the add random contact button

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>

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
                <td>{actor.wonOscar && <p>🏆</p>}</td>
                <td>{actor.wonEmmy && <p>🌟</p>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
