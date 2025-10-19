import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../lib/appwrite";

const UserContext = createContext({ user: null, setUser: () => {} });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      try {
        if (!account || typeof account.get !== "function") {
          // Appwrite account object not available or doesn't support .get()
          setUser(null);
          return;
        }

        const currentUser = await account.get();
        // account.get() returns the user if authenticated, otherwise throws
        console.log("UserContext: account.get() ->", currentUser);
        setUser(currentUser ?? null);
      } catch (err) {
        // Not authenticated or network error - keep user as null
        console.debug("UserContext: could not get account user:", err?.message || err);
        setUser(null);
      }
    };

    getLoggedInUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserContext, UserProvider, useUser };