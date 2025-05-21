import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProviderWithTheme } from './lib/clerk-provider'

createRoot(document.getElementById("root")!).render(
  <ClerkProviderWithTheme>
    <App />
  </ClerkProviderWithTheme>
);
