import { useState, useCallback, useEffect } from "react";

const storageName = "__auth_pr_init_token__";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  /*Check if there's token and userId in local storage already*/
  // TODO: KNOW BUG, if, there's undefined token, possibly if it's null as well,
  // the app will fail to render, fix it.
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token && data.userId) {
      login(data.token, data.userId);
    }
  }, [login]);

  return { login, logout, token, userId };
};
