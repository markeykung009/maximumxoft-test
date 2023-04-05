import React, { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import SearchForm from "./components/SearchForm";

import axios from "axios";
import User from "./components/User";
import Notfound from "./components/Notfound";

const App = () => {
  const [userData, setUserData] = useState([]);

  const [inputSearch, setInputSearch] = useState("");

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search = data => {
    return data.filter(el => {
      return el.name.toLowerCase().includes(inputSearch.toLowerCase());
    });
  };

  const show = search(userData);

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then(data => {
        setUserData(users => [...users, data]);
      })
      .catch(error => console.log(error));
  };

  const onEdit = async (id, name, email) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then(data => {
        // setUsers((users) => [...users, data]);
        const updatedUsers = userData.map(user => {
          if (user.id === id) {
            user.name = name;
            user.email = email;
          }

          return user;
        });

        setUserData(users => updatedUsers);
      })
      .catch(error => console.log(error));
  };

  const onDelete = async id => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (response.status !== 200) {
          return;
        } else {
          setUserData(
            userData.filter(user => {
              return user.id !== id;
            })
          );
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center m-14">
        <InputForm onAdd={onAdd} />
        <br />
        <SearchForm setInputSearch={setInputSearch} inputSearch={inputSearch} />
        <br />
        {show.length === 0 ? (
          <Notfound />
        ) : (
          show.map(user => (
            <User
              id={user.id}
              key={user.id}
              name={user.name}
              email={user.email}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </>
  );
};

export default App;
