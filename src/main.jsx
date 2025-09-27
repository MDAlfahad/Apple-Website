import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://3c3283f42a5d4faf5d7bcf3ac3afd3ed@o4509485863337984.ingest.us.sentry.io/4509485868056576",

  sendDefaultPii: true
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
