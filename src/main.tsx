import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProviderWithTheme } from './lib/clerk-provider'
import { HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById("root")!).render(
  <ClerkProviderWithTheme>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </ClerkProviderWithTheme>
);
