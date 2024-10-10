import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {FirebaseProvider} from './contexts/Context.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<FirebaseProvider>
			<App />
		</FirebaseProvider>
	</StrictMode>,
)
