export const loginRequest = {
  scopes: ["user.read"],
};

export const msalConfig = {
  auth: {
    clientId: "0212fa3e-0db0-40fd-8fc8-5728d7c177dc",
    authority:
      "https://login.microsoftonline.com/cc099856-d092-4bf8-bf4b-10b37b156601",
    redirectUri: "localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};
