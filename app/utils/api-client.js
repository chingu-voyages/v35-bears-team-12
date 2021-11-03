import * as auth from "./auth-provider";
// const apiURL = process.env.APP_API_URL;
// base url is the api base-url
// import { BASE_URL } from "./config";

/**
 * API client that's able to make POST and GET requests
 * ideally we should switch to some existing solution
 * for a more serious use case, although, it is also
 * possible to extend this one
 */
function client(
  endpoint,
  { data, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };
  console.log(process.env.NEXT_PUBLIC_API_URL);
  // check if we are in a browser
  if (typeof window === "undefined") {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, config).then(
      async (response) => {
        // if (response.status === 401) {
        //   await auth.logout();

        //   window.location.assign(window.location);
        //   return Promise.reject({ message: "Please re-authenticate" });
        // }
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      }
    );
  } else {
    return window
      .fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, config)
      .then(async (response) => {
        // if (response.status === 401) {
        //   await auth.logout();

        //   window.location.assign(window.location);
        //   return Promise.reject({ message: "Please re-authenticate" });
        // }
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      });
  }
}

export { client };
