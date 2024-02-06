import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(contacts.slice(0, 5));

  /* START ADD RANDOM CONTACT */
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

  /* END ADD RANDOM CONTACT */

  /* START SORT BY NAME */
  const sortByName = () => {
    const clonedPeople = [...people];
    // Sort copy of people alphabetically
    const sortedPeopleByName = clonedPeople.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    // console.log("sorted people", sortedPeopleByName);
    // Finally, update the people variable through the function
    setPeople(sortedPeopleByName);
  };
  /* END SORT BY NAME */

  /* START SORT BY POPULARITY */
  const sortByPopularity = () => {
    const clonedPeople = [...people];
    // Sort copy of people alphabetically
    const sortedPeopleByPopularity = clonedPeople.sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      if (a.popularity < b.popularity) return 1;
      return 0;
    });
    // console.log("sorted people by pop", sortedPeopleByPopularity);
    // Finally, update the people variable through the function
    setPeople(sortedPeopleByPopularity);
  };
  /* END SORT BY POPULARITY */

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>
      <br />
      <button onClick={sortByName}>Sort by name</button>
      <br />
      <button onClick={sortByPopularity}>Sort by popularity</button>

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
