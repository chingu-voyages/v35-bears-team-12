// pretend this is firebase, netlify, or auth0's code.
// This is not gonna be a part of a real part
// I'm using it only because I don't know what we gonna choose
// as our auth provider or if we gonna implement one from scratch.
import { client } from "./api-client";

const localStorageKey = "__auth_chingu_token__";

async function getToken() {
  // if we were a real auth provider, this is where we would make a request
  // to retrieve the user's token. (It's a bit more complicated than that...
  return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse(user) {
  window.localStorage.setItem(localStorageKey, user.token);
  return user;
}

function login({ username, password }) {
  return client("login", {
    data: {
      username,
      password,
    },
  }); //.then(handleUserResponse);
}

function register({ username, password }) {
  return client("register", {
    data: {
      username,
      password,
    },
  }); // .then(handleUserResponse);
}

async function logout() {
  window.localStorage.removeItem(localStorageKey);
}

export { getToken, login, register, logout, localStorageKey };
