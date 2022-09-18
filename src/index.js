import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Sign.ttf';
import './style.css';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
);
