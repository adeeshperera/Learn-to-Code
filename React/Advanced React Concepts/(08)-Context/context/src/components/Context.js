import React from "react";

// Step 1 - Create the context => App.js
const UserContext = React.createContext("Default Value");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
