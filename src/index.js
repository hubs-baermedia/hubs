/**
 * Creates the Root react component and renders it in index.html.
 * @version 1.0.0
 * @status checked
 */
import React from "react";
import ReactDOM from "react-dom";
import { WrappedIntlProvider } from "./react-components/wrapped-intl-provider";
import registerTelemetry from "./telemetry";
import Store from "./storage/store";
import { HomePage } from "./react-components/home/HomePage";
import { AuthContextProvider } from "./react-components/auth/AuthContext";
import { ThemeProvider } from "./react-components/styles/theme";

registerTelemetry("/home", "Hubs Home Page");

// Create Store of App and attach it to window.
const store = new Store();
window.APP = { store };

// Root element of the react app.
function Root() {
  return (
    // Wrapped Internalization Provider
    <WrappedIntlProvider>
      <ThemeProvider store={store}>
        <AuthContextProvider store={store}>
          <HomePage />
        </AuthContextProvider>
      </ThemeProvider>
    </WrappedIntlProvider>
  );
}

// Renders the Root element in the home-root element of index.html
ReactDOM.render(<Root />, document.getElementById("home-root"));
