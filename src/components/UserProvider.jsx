import { useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUsers } from "../utils/api";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUsers().then((users) => {
      setUser(users[0]);
    });
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
