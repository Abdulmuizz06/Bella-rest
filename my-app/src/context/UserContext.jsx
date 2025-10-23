import { createContext, useState, useEffect } from "react";
import { account } from "../lib/appwrite";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        console.log("No active session:", error.message);
        setUser(null);
      }
    };

    getLoggedInUser();
  }, []);

  // Login function to create session and update user state
  const login = async (email, password) => {
    try {
      await account.createSession(email, password);
      const currentUser = await account.get();
      setUser(currentUser);
      alert("Logged in successfully!");
      return true;
    } catch (error) {
      console.error("Login failed:", error.message);
      alert(`Login failed: ${error.message}`);
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
