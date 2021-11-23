// TODO: Optimize
/**
 * User State Management For The App ( Action Hooks Pattern )
 * Global store for server side data for a user
 */
import React, { useContext } from "react";

import { signIn, signOut, useSession } from "next-auth/client";

const UserStore = React.createContext();
UserStore.displayName = "UserStore";

function UserProvider({ children }) {
  const [session, loading] = useSession();

  return (
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
