import 'materialize-css/dist/css/materialize.min.css'
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

root.render(
    <Provider store = {store}><App /></Provider>, 
    document.querySelector('#root')
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV);