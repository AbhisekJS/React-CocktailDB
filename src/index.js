import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { AppProvider } from './context';
const rootElement = document.getElementById('root');
ReactDOM.render(
	<StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</StrictMode>,
	rootElement
);
