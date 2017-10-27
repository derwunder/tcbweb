import React from 'react';
import ReactDOM from 'react-dom';
// File directory
import { HomeCss } from './directory';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
