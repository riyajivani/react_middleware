import './App.css';
import MyComponent from './components/MyComponent';
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <MyComponent />
    </div>
    </Provider>
  );
}

export default App;
