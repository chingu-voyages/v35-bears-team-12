// TODO: Optimize
/**
 * User State Managment For The App ( Action Hooks Pattern )
 * Global store for server side data for a user
 */
import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { useAuth } from "../hooks/useAuth";
import { signIn, signOut, useSession } from "next-auth/client";

const UserStore = React.createContext();
UserStore.displayName = "UserStore";

// TODO -> useReducer for state managment instead
function UserProvider({ children }) {
  // @Depreciated login
  // const { login, logout, token, userId } = useAuth();
  // useMemo --> for optimization
  // const auth = { login, logout, token, userId };

  const [session, loading] = useSession();

  // useEffect(() => {

  // }, [session, loading])

  return (
    // <UserStore.Provider value={{ login, logout, token, userId}}>
    <UserStore.Provider value={{ signIn, signOut, session, loading }}>
      {children}
    </UserStore.Provider>
  );
}

function useUserStore() {
  const context = useContext(UserStore);
  if (context === undefined) {
    throw new Error("useUserStore must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserStore };
