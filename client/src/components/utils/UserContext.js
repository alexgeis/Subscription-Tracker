import React, { createContext, useContext, useState } from "react";

// Initialize new context for users
const UserContext = createContext();

// We create a custom hook to provide immediate usage of the user context value (users) in other components
export const useUserContext = () => useContext(UserContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Sayid1",
      subscription: ["Netflix", "HelloFresh", "Instacart"],
    },
    {
      id: 2,
      username: "SunHwa",
      subscription: ["Hulu", "Amazon", "Instacart"],
    },
  ]);

  // Creating our state
  const [darkTheme, setDarkTheme] = useState(true);

  // Method to update our state
  const toggleTheme = () => {
    console.log("inside toggle theme");
    return setDarkTheme((prev) => !prev);
  };

  // Function to add a user
  const addUser = (user) => {
    // Check if the user forgot to enter a name
    if (!user.username) {
      return;
    }
    const id = users.length + 1;

    // We use the spread operator to fill in the details from the user object that was passed while adding the new `id`
    const newUser = { ...user, id };

    // Update state with the users array with the newUser
    setUsers([...users, newUser]);
  };

  // Function to remove a user
  const removeUser = (id) => {
    // Copy the content of the users array into our new list with the spread operator, then filter out the user that matches the `id` that was passed
    const newUsersList = [...users.filter((user) => user.id !== id)];

    setUsers(newUsersList);
  };

  // List of options for the user subscriptions
  // const subscriptions = [
  //   "Netflix",
  //   "Hulu",
  //   "Quibbi",
  //   "Roku",
  //   "Bearshare",
  //   "WikiFeet",
  // ];

  return (
    <UserContext.Provider
      value={{ users, addUser, removeUser, darkTheme, toggleTheme }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </UserContext.Provider>
  );
};
