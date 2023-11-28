import React from 'react';
import ReactDOM from "react-dom/client"
import { App } from './App';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
// Also available from @uifabric/icons (7 and earlier) and @fluentui/font-icons-mdl2 (8+)
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from './pages/errorPage/ErrorPage';
initializeIcons();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>
);