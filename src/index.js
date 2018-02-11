import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickCounter from './app/ClickCounter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickCounter />, document.getElementById('root'));
registerServiceWorker();
