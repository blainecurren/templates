import Login from "./components/Login/Login";
import "./App.css";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

const msalInstance = new PublicClientApplication(msalConfig);
function App() {
  return (
    <div className="App">
      <MsalProvider instance={msalInstance}>
        <Login />
      </MsalProvider>
    </div>
  );
}

export default App;
