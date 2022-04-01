import { Component } from 'react';
import ApplicationFrame from './components/ApplicationFrame';
import { Provider } from 'react-redux';
import { ConfigureStore } from './store/configureStore';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
            <ApplicationFrame />
          </div>
      </Provider>
    );
  }
}


export default App;
