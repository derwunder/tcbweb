import React from 'react';
import ReactDOM from 'react-dom';
// File directory
import { IndexCss } from './directory';
// Main Route pending change
import { Home } from './Views/Home';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
