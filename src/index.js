import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Root extends Component  {
  render () {
    return (
        <App />
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
