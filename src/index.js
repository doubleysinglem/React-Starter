import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './Router';
import registerServiceWorker from './registerServiceWorker';

import './Style/common.css'
ReactDOM.render(<RouterMap />, document.getElementById('root'));
registerServiceWorker();
